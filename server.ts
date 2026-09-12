import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { getFallbackItinerary } from './src/data/fallbackItineraries.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY not found in environment; will use curated generator fallback.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Structured schema for 3-day travel itinerary
const itineraryResponseSchema = {
  type: Type.OBJECT,
  properties: {
    cityName: {
      type: Type.STRING,
      description: "Official city name and country, e.g. 'Kyoto, Japan'",
    },
    tagline: {
      type: Type.STRING,
      description: "An evocative one-sentence subtitle capturing the spirit of the trip",
    },
    overview: {
      type: Type.STRING,
      description: "A rich 2-3 sentence overview of the 3-day adventure",
    },
    bestTimeToVisit: {
      type: Type.STRING,
      description: "Best seasons or months to visit",
    },
    localCurrency: {
      type: Type.STRING,
      description: "Local currency name and symbol",
    },
    gettingAround: {
      type: Type.STRING,
      description: "Best public transportation or walking tips",
    },
    topLocalFoods: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3-4 must-try regional dishes or beverages",
    },
    days: {
      type: Type.ARRAY,
      description: "Exactly 3 distinct days of travel itineraries",
      items: {
        type: Type.OBJECT,
        properties: {
          dayNumber: {
            type: Type.INTEGER,
            description: "Day number: 1, 2, or 3",
          },
          title: {
            type: Type.STRING,
            description: "Cohesive theme for the day (e.g. 'Imperial Temples & Bamboo Groves')",
          },
          highlight: {
            type: Type.STRING,
            description: "The signature highlight or must-do experience for this day",
          },
          dailyTip: {
            type: Type.STRING,
            description: "Helpful logistical tip specifically for this day's route and pace",
          },
          activities: {
            type: Type.ARRAY,
            description: "4-5 sequentially scheduled activities covering morning, midday, afternoon, and evening",
            items: {
              type: Type.OBJECT,
              properties: {
                time: {
                  type: Type.STRING,
                  description: "Time window, e.g., '09:00 AM - 11:30 AM'",
                },
                period: {
                  type: Type.STRING,
                  description: "One of: 'Morning', 'Midday', 'Afternoon', 'Evening'",
                },
                title: {
                  type: Type.STRING,
                  description: "Name of the attraction, venue, or activity",
                },
                location: {
                  type: Type.STRING,
                  description: "Specific neighborhood or district",
                },
                description: {
                  type: Type.STRING,
                  description: "2-3 sentences explaining what to see, do, and experience",
                },
                category: {
                  type: Type.STRING,
                  description: "One of: 'sightseeing', 'food', 'culture', 'nature', 'shopping', 'nightlife'",
                },
                estimatedDuration: {
                  type: Type.STRING,
                  description: "e.g. '2.5 hours'",
                },
                insiderTip: {
                  type: Type.STRING,
                  description: "A savvy local secret, ticket booking tip, or photography vantage point",
                },
              },
              required: ["time", "period", "title", "location", "description", "category", "estimatedDuration"],
            },
          },
        },
        required: ["dayNumber", "title", "highlight", "activities"],
      },
    },
  },
  required: ["cityName", "tagline", "overview", "days"],
};

app.post('/api/generate-itinerary', async (req, res) => {
  const { city, style } = req.body;

  if (!city || typeof city !== 'string' || city.trim().length === 0) {
    return res.status(400).json({ error: "City name is required" });
  }

  const trimmedCity = city.trim();
  const travelStyle = style && typeof style === 'string' ? style.trim() : 'Balanced Highlights';

  const ai = getGenAI();

  if (!ai) {
    // Fallback mode if API key is not configured
    const fallback = getFallbackItinerary(trimmedCity);
    return res.json({ itinerary: fallback, source: "fallback" });
  }

  try {
    const prompt = `Create a realistic, well-paced, and meticulously detailed 3-Day travel itinerary for the city of "${trimmedCity}".
Travel style preference: ${travelStyle}.
Requirements:
1. The plan MUST contain exactly 3 distinct days (Day 1, Day 2, Day 3).
2. Each day MUST have 4-5 sequential activities covering Morning, Midday (lunch/rest), Afternoon, and Evening.
3. Realistic time allocations, actual neighborhood locations, practical insider tips, and logical geographical clustering so the traveler isn't zigzagging across the city.
4. Include top local foods, best season to visit, and getting-around transportation advice.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an elite travel planner and local travel guide specializing in concise, authentic, highly structured 3-day city itineraries. Output structured JSON adhering strictly to the schema.",
        responseMimeType: "application/json",
        responseSchema: itineraryResponseSchema,
        temperature: 0.7,
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response received from model");
    }

    const parsedItinerary = JSON.parse(responseText);

    // Validate that days array exists and has elements
    if (!parsedItinerary.days || !Array.isArray(parsedItinerary.days) || parsedItinerary.days.length === 0) {
      throw new Error("Invalid itinerary structure generated");
    }

    return res.json({ itinerary: parsedItinerary, source: "gemini" });
  } catch (error: any) {
    console.error("Error calling Gemini API:", error?.message || error);
    // Graceful fallback so user always sees a beautiful 3-day itinerary
    const fallback = getFallbackItinerary(trimmedCity);
    return res.json({ itinerary: fallback, source: "fallback", warning: error?.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(process.env.GEMINI_API_KEY) });
});

// Vite middleware for development & static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`3-Day Travel Itinerary server running on http://localhost:${PORT}`);
  });
}

startServer();
