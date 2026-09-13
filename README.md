# ✈️ AI Travel Itinerary Generator

An AI-powered travel planner that creates structured, realistic **3-day city itineraries** with time slots, activities, local food recommendations, transportation guidance, and practical insider tips.

## 🌍 Overview

The AI Travel Itinerary Generator helps travelers quickly turn a destination idea into a well-paced travel plan. Enter a city, choose a travel style, and the application generates a detailed three-day itinerary organized by time of day and location.

The project uses **React + TypeScript** for the frontend and an **Express + TypeScript** server with Google's Gemini API for AI-powered itinerary generation. If the Gemini API key is unavailable or an AI request fails, the application gracefully falls back to curated itinerary data.

## ✨ Features

- 🗺️ Generate a complete 3-day itinerary for a city
- 🤖 AI-powered itinerary generation using Google Gemini
- 🎯 Multiple travel-style preferences
- ⏰ Sequential time slots covering morning, midday, afternoon, and evening
- 📍 Neighborhood and location information for each activity
- 🍜 Local food recommendations
- 🚇 Getting-around and transportation advice
- 🌤️ Best time to visit recommendations
- 💡 Insider tips for attractions, tickets, routes, and photography
- 📋 Structured itinerary overview and day-by-day schedule
- 🔄 Retry generation when an API request fails
- 🛡️ Curated fallback itineraries when Gemini is unavailable
- 📱 Responsive interface for desktop and mobile screens
- ✨ Smooth UI animations and modern styling

## 🧰 Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

### Backend

- Node.js
- Express
- TypeScript
- dotenv
- Google GenAI SDK

### AI

- Google Gemini API
- Structured JSON responses using a defined itinerary schema

## 🏗️ Project Structure

```text
AI-Travel-Itinerary-Generator/
├── src/
│   ├── components/
│   │   ├── CitySearchForm.tsx
│   │   ├── DayScheduleView.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Header.tsx
│   │   ├── ItineraryOverview.tsx
│   │   └── LoadingState.tsx
│   ├── data/
│   │   └── fallbackItineraries.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── server.ts
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sharique2123/AI-Travel-Itinerary-Generator.git
cd AI-Travel-Itinerary-Generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the Gemini API key

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Keep your API key private and **never commit the `.env` file to GitHub**.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Express + Vite development server |
| `npm run build` | Builds the frontend and bundles the production server |
| `npm start` | Starts the production server |
| `npm run preview` | Runs the Vite preview server |
| `npm run lint` | Runs TypeScript type checking |
| `npm run clean` | Removes generated build files |

## 🔄 How It Works

1. The user enters a destination city.
2. The user selects a preferred travel style.
3. The React frontend sends the request to `/api/generate-itinerary`.
4. The Express server sends a structured prompt to Google Gemini.
5. Gemini returns itinerary data following a predefined JSON schema.
6. The server validates the response and sends it back to the frontend.
7. React displays the itinerary overview and detailed day-by-day schedule.
8. If Gemini is unavailable or generation fails, curated fallback data is returned instead.

## 🔌 API Endpoints

### `POST /api/generate-itinerary`

Generates a three-day itinerary.

Example request:

```json
{
  "city": "Tokyo",
  "style": "Balanced Highlights"
}
```

The response contains the generated itinerary and identifies whether it came from Gemini or the fallback generator.

### `GET /api/health`

Returns a basic server health response and indicates whether a Gemini API key is configured.

## 🧠 Itinerary Output

Each generated itinerary can include:

- City name and country
- Trip tagline and overview
- Best time to visit
- Local currency
- Getting-around advice
- Top local foods
- Exactly three travel days
- Four to five activities per day
- Time and period for each activity
- Attraction/activity name
- Neighborhood or district
- Description
- Activity category
- Estimated duration
- Insider tips

## 🛡️ Fallback Mode

The application is designed to remain usable even when an AI request cannot be completed. If `GEMINI_API_KEY` is missing, or if Gemini returns an error or invalid response, the server uses the project's curated fallback itinerary generator.

This provides a more reliable user experience instead of leaving the traveler with an error page.

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Optional* | Google Gemini API key used for AI itinerary generation |
| `NODE_ENV` | Optional | Set to `production` for production static serving |

\* The application can operate using fallback itinerary data without a Gemini API key.

## 📦 Production Build

Build the application with:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## ⚠️ Notes

AI-generated travel recommendations should be verified before travel, especially opening hours, ticket availability, transportation schedules, prices, and temporary closures. Travel conditions and local information can change.

## 👨‍💻 Author

**Sharique Azhar**

GitHub: [@sharique2123](https://github.com/sharique2123)

## 📄 License

This project contains source files marked under the Apache-2.0 license. See the source files and repository contents for applicable licensing information.

---

⭐ If you find this project useful, consider giving the repository a star!