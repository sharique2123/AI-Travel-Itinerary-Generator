import { Itinerary } from '../types.js';

export const fallbackDatabase: Record<string, Itinerary> = {
  kyoto: {
    cityName: "Kyoto, Japan",
    tagline: "Eternal temples, tranquil zen gardens, and living geisha heritage",
    overview: "A spellbinding 3-day cultural pilgrimage through Japan's ancient capital, taking you from thousands of vermilion shrine torii gates to tranquil bamboo groves, historic tea houses, and golden pavilions.",
    bestTimeToVisit: "April (Cherry Blossoms) & November (Crimson Maple Foliage)",
    localCurrency: "Japanese Yen (¥ / JPY)",
    gettingAround: "Kyoto City Bus & Hankyu/Keihan Rail Lines with an IC card",
    topLocalFoods: ["Kaiseki multi-course dinner", "Yudofu (simmered soft tofu)", "Uji Matcha parfaits", "Yatsuhashi cinnamon sweets"],
    days: [
      {
        dayNumber: 1,
        title: "Higashiyama Heritage, Kiyomizu-dera & Gion Evening",
        highlight: "Stepping onto the wooden stage of Kiyomizu-dera overlooking cherry and maple trees",
        dailyTip: "Explore Sannenzaka and Ninenzaka slopes in the early afternoon for the most atmospheric photo lighting.",
        activities: [
          {
            id: "k-1-1",
            time: "08:00 AM - 10:30 AM",
            period: "Morning",
            title: "Fushimi Inari-Taisha Shinto Shrine",
            location: "Fushimi Ward, Kyoto",
            description: "Wander through the mystical Senbon Torii—over 10,000 vivid vermilion gates winding up the sacred Mount Inari through dense forest.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Hike up to the Yotsutsuji intersection (30-40 min up) for sweeping panoramas of Kyoto with far fewer tourists."
          },
          {
            id: "k-1-2",
            time: "11:30 AM - 01:30 PM",
            period: "Midday",
            title: "Nishiki Market Culinary Walk",
            location: "Nakagyo Ward, Downtown Kyoto",
            description: "Sample street snacks through Kyoto's 400-year-old 'Kitchen' narrow market alley: dashi tamago, tako tamago skewers, and freshly roasted senbei rice crackers.",
            category: "food",
            estimatedDuration: "2 hours",
            insiderTip: "Remember to eat in designated areas in front of each stall; walking while eating is discouraged on Kyoto's market streets."
          },
          {
            id: "k-1-3",
            time: "02:00 PM - 05:00 PM",
            period: "Afternoon",
            title: "Kiyomizu-dera & Historic Slopes of Higashiyama",
            location: "Higashiyama Ward, Kyoto",
            description: "Marvel at the monumental wooden temple perched on a cliff without a single nail. Stroll down cobblestone preserved slopes of Sannenzaka and Ninenzaka.",
            category: "sightseeing",
            estimatedDuration: "3 hours",
            insiderTip: "Drink from Otowa Waterfall's three streams beneath Kiyomizu-dera, believed to grant health, success, or love."
          },
          {
            id: "k-1-4",
            time: "06:00 PM - 09:30 PM",
            period: "Evening",
            title: "Gion Lantern District & Shirakawa Canal Stroll",
            location: "Gion & Pontocho Alley",
            description: "Walk past 17th-century wooden ochaya teahouses in Gion and along the lantern-lit Pontocho Alley parallel to the Kamogawa river, dining on seasonal Obanzai dishes.",
            category: "food",
            estimatedDuration: "3.5 hours",
            insiderTip: "Cross the Tatsumi Bridge at dusk for reflections of paper lanterns in the canal water."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Arashiyama Wonders, Bamboo Forests & Zen Reflections",
        highlight: "Walking the sun-dappled green path through Arashiyama Bamboo Grove and the Tenryu-ji Sogenchi garden",
        dailyTip: "Arrive at the Bamboo Grove by 8:00 AM before tour buses arrive to hear the soothing rustle of the stalks.",
        activities: [
          {
            id: "k-2-1",
            time: "08:00 AM - 10:30 AM",
            period: "Morning",
            title: "Arashiyama Bamboo Grove & Tenryu-ji Temple",
            location: "Ukyo Ward, Western Kyoto",
            description: "Walk beneath towering bamboo stalks rising 20 meters overhead, followed by visiting Tenryu-ji, a World Heritage Zen temple with an original 14th-century landscape garden.",
            category: "nature",
            estimatedDuration: "2.5 hours",
            insiderTip: "Follow the path out of the bamboo grove up into Okochi Sanso Villa garden for quiet matcha service included with admission."
          },
          {
            id: "k-2-2",
            time: "11:00 AM - 01:00 PM",
            period: "Midday",
            title: "Togetsukyo Bridge & Riverbank Soba Lunch",
            location: "Arashiyama Waterfront",
            description: "Cross the 'Moon Crossing Bridge' spanning the Oi River, then enjoy chilled buckwheat soba and crispy mountain vegetable tempura beside the riverbank.",
            category: "food",
            estimatedDuration: "2 hours",
            insiderTip: "Rent an open wooden rowing boat for 30 minutes to admire the mountain ridges from the water."
          },
          {
            id: "k-2-3",
            time: "02:00 PM - 04:30 PM",
            period: "Afternoon",
            title: "Kinkaku-ji (The Golden Pavilion)",
            location: "Kita Ward, Kyoto",
            description: "Witness the top two floors of Kinkaku-ji completely gilded in pure gold leaf, reflecting in the mirror pond surrounded by pine trees and rock islands.",
            category: "sightseeing",
            estimatedDuration: "2 hours",
            insiderTip: "The best photography angle is immediately upon entering the pavilion viewing gate across Kyoko-chi pond."
          },
          {
            id: "k-2-4",
            time: "05:30 PM - 09:00 PM",
            period: "Evening",
            title: "Kamo River Banks & Izakaya Feast",
            location: "Kamogawa Riverfront",
            description: "Sit alongside locals on the scenic grass banks of Kamo River, then dine in a traditional riverside townhouse serving hot nabe hotpot and Kyoto sake.",
            category: "nightlife",
            estimatedDuration: "3.5 hours",
            insiderTip: "During summer and early autumn, many restaurants build 'kawayuka' elevated wooden dining decks over the river."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Philosopher's Path, Silver Pavilion & Traditional Tea",
        highlight: "Strolling the tranquil cherry-lined canal of Philosopher's Path and partaking in an authentic Uji matcha ceremony",
        dailyTip: "This is a relaxed, contemplative walking day; bring a small tote bag for hand-painted ceramics and incense.",
        activities: [
          {
            id: "k-3-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: "Ginkaku-ji (Silver Pavilion) & Zen Dry Garden",
            location: "Sakyo Ward, Eastern Kyoto",
            description: "Explore the understated elegance of Ginkaku-ji, renowned for its meticulously raked silver sand garden 'Sea of Silver Sand' and moss-covered hillside trails.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Walk all the way up the short moss hill path for a view of Ginkaku-ji framed against Kyoto's northern mountains."
          },
          {
            id: "k-3-2",
            time: "11:30 AM - 01:30 PM",
            period: "Midday",
            title: "Philosopher's Path & Garden Cafe",
            location: "Tetsugaku-no-Michi Canal",
            description: "A gentle 2-kilometer stone path alongside a gentle canal named after Kyoto University philosopher Nishida Kitaro. Enjoy lunch at a traditional cafe along the water.",
            category: "nature",
            estimatedDuration: "2 hours",
            insiderTip: "Keep an eye out for friendly neighborhood cats lounging outside wooden tea houses along the canal."
          },
          {
            id: "k-3-3",
            time: "02:00 PM - 04:30 PM",
            period: "Afternoon",
            title: "Nanzen-ji Temple & Roman Brick Aqueduct",
            location: "Nanzenji Fukuchicho",
            description: "Visit one of Japan's most important Zen temples, featuring an enormous two-story Sanmon gate and an unexpected 1890 red-brick Roman-style aqueduct running through the temple grounds.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Climb up to the balcony of the Sanmon gate for the same view that legendary bandit Ishikawa Goemon called 'Magnificent! Magnificent!'."
          },
          {
            id: "k-3-4",
            time: "05:30 PM - 09:30 PM",
            period: "Evening",
            title: "Farewell Traditional Tea Ceremony & Kaiseki Dinner",
            location: "Downtown Kyoto / Gion",
            description: "Participate in a serene Chanoyu matcha tea ceremony led by a tea master, followed by an exquisite multi-course Kyoto Kaiseki banquet showcasing seasonal mountain vegetables and sea bream.",
            category: "food",
            estimatedDuration: "4 hours",
            insiderTip: "A quintessential Kyoto experience that brings together culinary art, seasonality, and hospitality into one unforgettable evening."
          }
        ]
      }
    ]
  },
  tokyo: {
    cityName: "Tokyo, Japan",
    tagline: "Where ancient shrines meet neon-lit futuristic streets",
    overview: "A seamless 3-day exploration balancing Tokyo's sacred historic traditions with cutting-edge urban energy, culinary gems, and tranquil gardens.",
    bestTimeToVisit: "March to May (Cherry Blossoms) & October to November (Autumn)",
    localCurrency: "Japanese Yen (¥ / JPY)",
    gettingAround: "Tokyo Metro & JR Yamanote Line with Suica / Pasmo IC card",
    topLocalFoods: ["Tonkotsu & Shoyu Ramen", "Fresh Tsukiji/Toyosu Nigiri Sushi", "Crispy Tonkatsu in Ginza", "Yakitori under the Yurakucho tracks"],
    days: [
      {
        dayNumber: 1,
        title: "Old Edo Traditions & Historic Asakusa",
        highlight: "Passing under the giant red lantern of Sensō-ji and cruising the Sumida River",
        dailyTip: "Arrive at Sensō-ji before 9:00 AM to enjoy Nakamise-dori before the afternoon crowds arrive.",
        activities: [
          {
            id: "t-1-1",
            time: "08:30 AM - 11:00 AM",
            period: "Morning",
            title: "Sensō-ji Temple & Nakamise Shopping Street",
            location: "Asakusa, Taito City",
            description: "Explore Tokyo's oldest and most revered Buddhist temple. Wander through the atmospheric Nakamise shopping street sampling warm ningyo-yaki cakes and green tea snacks.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Take the elevator to the 8th floor of the Asakusa Culture Tourist Information Center across the street for a free panorama view of the temple complex."
          },
          {
            id: "t-1-2",
            time: "11:30 AM - 01:00 PM",
            period: "Midday",
            title: "Traditional Soba Lunch & Kappabashi Kitchen Town",
            location: "Kappabashi Dougu Street",
            description: "Dine on handmade buckwheat soba noodles before strolling through Kappabashi, Tokyo's legendary restaurant supply district famous for chef knives and hyper-realistic wax food models.",
            category: "food",
            estimatedDuration: "1.5 hours",
            insiderTip: "Pick up hand-forged Japanese kitchen knives; many shops offer same-day custom kanji engraving."
          },
          {
            id: "t-1-3",
            time: "01:30 PM - 04:30 PM",
            period: "Afternoon",
            title: "Ueno Park & Tokyo National Museum",
            location: "Ueno Park, Taito City",
            description: "Walk under the canopy of Ueno Park to the Tokyo National Museum, housing the world's largest collection of Japanese art, samurai armor, and ancient ceramics.",
            category: "sightseeing",
            estimatedDuration: "3 hours",
            insiderTip: "The Japanese Gallery (Honkan) room 2 has priceless national treasure swords and kimono textiles."
          },
          {
            id: "t-1-4",
            time: "06:00 PM - 09:30 PM",
            period: "Evening",
            title: "Akihabara Electric Town & Izakaya Dining",
            location: "Akihabara & Kanda",
            description: "Immerse yourself in Akihabara's neon labyrinth of multi-story electronics stores, retro game arcades, and finish with sizzling yakitori and cold draft beer at an authentic train-underpass izakaya.",
            category: "nightlife",
            estimatedDuration: "3.5 hours",
            insiderTip: "Head towards the brick viaducts near Kanda station for relaxed local izakayas favored by neighborhood salarymen."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Modern Pop Culture, Meiji Serenity & Shibuya Crossing",
        highlight: "Walking the tranquil cedar forest of Meiji Jingu followed by the world's busiest pedestrian crossing",
        dailyTip: "Wear comfortable walking shoes; Shibuya and Harajuku involve stairs and extensive pedestrian avenues.",
        activities: [
          {
            id: "t-2-1",
            time: "08:30 AM - 10:30 AM",
            period: "Morning",
            title: "Meiji Jingu Shrine Forest Walk",
            location: "Yoyogi Kamizonocho, Shibuya",
            description: "Pass through towering 12-meter cypress Torii gates into a dense 170-acre forest of 100,000 donated trees leading to Tokyo's grandest Shinto shrine.",
            category: "culture",
            estimatedDuration: "2 hours",
            insiderTip: "Write a wish on a wooden 'Ema' plaque and hang it around the sacred camphor trees."
          },
          {
            id: "t-2-2",
            time: "11:00 AM - 01:30 PM",
            period: "Midday",
            title: "Harajuku Takeshita Street & Omotesando Architecture",
            location: "Jingumae, Shibuya",
            description: "Contrast the vibrant youth subcultures and crepe stands of Takeshita Street with the sophisticated tree-lined luxury boulevards and architectural showpieces of Omotesando.",
            category: "shopping",
            estimatedDuration: "2.5 hours",
            insiderTip: "Stop at Cat Street, a calm pedestrian lane between Harajuku and Shibuya full of indie coffee roasters and vintage boutiques."
          },
          {
            id: "t-2-3",
            time: "02:30 PM - 05:30 PM",
            period: "Afternoon",
            title: "Shinjuku Gyoen National Garden & Observation Deck",
            location: "Naitomachi, Shinjuku",
            description: "Unwind across 144 tranquil acres seamlessly blending formal French, English landscape, and traditional Japanese garden designs with tea houses and koi ponds.",
            category: "nature",
            estimatedDuration: "2.5 hours",
            insiderTip: "After the garden closes, visit the Tokyo Metropolitan Government Building 45th floor for free sunset views of Mount Fuji on clear days."
          },
          {
            id: "t-2-4",
            time: "06:30 PM - 10:00 PM",
            period: "Evening",
            title: "Shibuya Crossing & Omoide Yokocho Food Stalls",
            location: "Shibuya Scramble & Shinjuku Memory Lane",
            description: "Experience the pulse of thousands crossing simultaneously under giant video billboards at Shibuya Scramble, then explore Shinjuku's lantern-lit lantern alleyways for grilled skewers.",
            category: "nightlife",
            estimatedDuration: "3.5 hours",
            insiderTip: "For an unobstructed bird's-eye view of Shibuya crossing without buying tickets, head to the 2nd floor crossing corridor inside Shibuya Mark City."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Culinary Markets, Imperial Elegance & Waterfront Bay",
        highlight: "Tasting fresh sea urchin and wagyu skewers at Tsukiji Outer Market and sunset across Odaiba Rainbow Bridge",
        dailyTip: "Tsukiji Outer Market shops start closing by 2:00 PM, so keep your morning schedule prompt.",
        activities: [
          {
            id: "t-3-1",
            time: "08:00 AM - 10:30 AM",
            period: "Morning",
            title: "Tsukiji Outer Market Food Safari",
            location: "Tsukiji, Chuo City",
            description: "Weave through hundreds of bustling open-air stalls tasting rolled tamagoyaki omelets, grilled king crab legs, fresh oysters, and matcha soft serve.",
            category: "food",
            estimatedDuration: "2.5 hours",
            insiderTip: "Look for stalls with long lines of local residents; they guarantee highest turnover and freshest morning seafood."
          },
          {
            id: "t-3-2",
            time: "11:00 AM - 01:30 PM",
            period: "Midday",
            title: "Imperial Palace East Gardens & Marunouchi",
            location: "Chiyoda City",
            description: "Walk among ancient stone ramparts, historic guardhouses, and meticulously raked gravel paths on the grounds of the former Edo Castle, home to the Emperor of Japan.",
            category: "sightseeing",
            estimatedDuration: "2.5 hours",
            insiderTip: "Entry is free; enter through Ote-mon Gate and collect a token at security to return upon leaving."
          },
          {
            id: "t-3-3",
            time: "02:30 PM - 05:00 PM",
            period: "Afternoon",
            title: "Ginza Luxury District & Kabuki-za Theater",
            location: "Ginza, Chuo City",
            description: "Stroll Tokyo's most historic premier retail and cultural avenue. Admire the stunning traditional architecture of Kabuki-za theater and sample seasonal wagashi sweets in department store basements (depachika).",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Mitsukoshi and Matsuya basement food halls are gastronomic wonderlands where you can sample delicacies from master confectioners."
          },
          {
            id: "t-3-4",
            time: "05:45 PM - 09:30 PM",
            period: "Evening",
            title: "Yurikamome Monorail to Odaiba Waterfront Sunset",
            location: "Odaiba, Tokyo Bay",
            description: "Ride the driverless elevated train across Rainbow Bridge to Odaiba seaside park. Watch the illuminated Tokyo skyline reflect against the water while dining along the boardwalk.",
            category: "sightseeing",
            estimatedDuration: "3.5 hours",
            insiderTip: "Sit in the very front carriage of the Yurikamome train for an exhilarating roller-coaster-style view as it loops through Rainbow Bridge."
          }
        ]
      }
    ]
  },
  paris: {
    cityName: "Paris, France",
    tagline: "The City of Light: art, romantic boulevards, and timeless culinary mastery",
    overview: "A masterfully curated 3-day itinerary through Paris's world-famous museums, riverside walks along the Seine, charming Montmartre cobblestones, and iconic architectural wonders.",
    bestTimeToVisit: "April to June (Spring blooms) & September to October (Crisp autumn air)",
    localCurrency: "Euro (€ / EUR)",
    gettingAround: "Paris Métro (Navigo Easy card or contactless tickets) and scenic walking",
    topLocalFoods: ["Butter croissants & pain au chocolat", "French onion soup (Soupe à l'oignon)", "Steak frites with béarnaise", "Salted butter caramel crêpes"],
    days: [
      {
        dayNumber: 1,
        title: "The Historical Heart: Île de la Cité & The Louvre",
        highlight: "Admiring the stained glass marvel of Sainte-Chapelle and the masterpieces of the Louvre",
        dailyTip: "Pre-book timed-entry tickets for Sainte-Chapelle and the Louvre at least 2 weeks in advance.",
        activities: [
          {
            id: "p-1-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: "Notre-Dame Cathedral & Sainte-Chapelle",
            location: "Île de la Cité, 4th arrondissement",
            description: "Begin where Paris was born. Admire the restored majesty of Notre-Dame, then step inside the radiant 13th-century Gothic jewel box of Sainte-Chapelle, surrounded by 1,113 stained glass panels.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Visit Sainte-Chapelle on a sunny morning when the light illuminates the upper chapel stained glass into jewel-like purples and golds."
          },
          {
            id: "p-1-2",
            time: "12:00 PM - 01:30 PM",
            period: "Midday",
            title: "Latin Quarter Bistro Lunch & Shakespeare and Company",
            location: "5th arrondissement",
            description: "Cross the Pont Saint-Michel for a classic croque monsieur or quiche lorraine in a historic bistro, followed by browsing the bohemian shelves of legendary bookstore Shakespeare and Company.",
            category: "food",
            estimatedDuration: "1.5 hours",
            insiderTip: "Take a quiet peek at the poetry room upstairs in Shakespeare and Company overlooking the Seine."
          },
          {
            id: "p-1-3",
            time: "02:00 PM - 05:30 PM",
            period: "Afternoon",
            title: "The Louvre Museum: Classic Highlights Tour",
            location: "Rue de Rivoli, 1st arrondissement",
            description: "Enter beneath I.M. Pei's glass pyramid to encounter the world's most celebrated art collection: the Mona Lisa, the Winged Victory of Samothrace, and the Venus de Milo.",
            category: "culture",
            estimatedDuration: "3.5 hours",
            insiderTip: "Enter through the underground Carrousel du Louvre shopping arcade entrance for dramatically shorter security lines than the main pyramid."
          },
          {
            id: "p-1-4",
            time: "06:30 PM - 09:30 PM",
            period: "Evening",
            title: "Tuileries Garden Walk & Evening Seine River Cruise",
            location: "Jardin des Tuileries & Pont Neuf",
            description: "Stroll leisurely through the formal Tuileries gardens to the riverbanks, then board an open-air riverboat cruise to see Paris's bridges and monuments glowing in golden illumination.",
            category: "sightseeing",
            estimatedDuration: "3 hours",
            insiderTip: "Time your boat departure so you are on the water on the hour after dark to catch the Eiffel Tower's sparkling five-minute light show."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Artistic Montmartre & Grand Boulevards",
        highlight: "Wandering bohemian cobblestone hills and standing before Monet's Water Lilies at Musée de l'Orangerie",
        dailyTip: "Take the Montmartre funicular if you want to skip the 222 steps leading up to Sacré-Cœur.",
        activities: [
          {
            id: "p-2-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: "Sacré-Cœur Basilica & Village of Montmartre",
            location: "Montmartre, 18th arrondissement",
            description: "Climb the highest natural point in Paris to admire Sacré-Cœur's white travertine domes. Wander cobblestone alleys past Renoir's windmill (Moulin de la Galette) and Place du Tertre portrait painters.",
            category: "sightseeing",
            estimatedDuration: "2.5 hours",
            insiderTip: "Venture behind Place du Tertre down Rue de l'Abreuvoir to find La Maison Rose, one of the most picturesque pastel corners in Europe."
          },
          {
            id: "p-2-2",
            time: "12:00 PM - 01:30 PM",
            period: "Midday",
            title: "Galette Crêpe Lunch on Rue des Martyrs",
            location: "South Pigalle (SoPi), 9th arrondissement",
            description: "Walk down the vibrant foodie street Rue des Martyrs to enjoy artisanal buckwheat galettes stuffed with Gruyère cheese, ham, and farm eggs, paired with dry Breton cider.",
            category: "food",
            estimatedDuration: "1.5 hours",
            insiderTip: "Pick up fresh butter biscuits from Sebastien Gaudard bakery halfway down the street."
          },
          {
            id: "p-2-3",
            time: "02:30 PM - 05:00 PM",
            period: "Afternoon",
            title: "Palais Garnier Opera House & Galeries Lafayette",
            location: "Place de l'Opéra, 9th arrondissement",
            description: "Marvel at the gilded grandeur of the Palais Garnier, phantom legend, and Chagall's colorful ceiling painting. Walk next door to Galeries Lafayette to view the Art Nouveau stained-glass dome.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Take the escalator to the free rooftop terrace at Galeries Lafayette for one of the finest panoramic views of the Opera and Eiffel Tower."
          },
          {
            id: "p-2-4",
            time: "06:30 PM - 10:00 PM",
            period: "Evening",
            title: "Le Marais Historic District & Dinner Bistro",
            location: "4th arrondissement",
            description: "Meander through 17th-century mansions, courtyard galleries, and the arcaded lawns of Place des Vosges, ending with wine and duck confit in a candlelit Marais bistro.",
            category: "food",
            estimatedDuration: "3.5 hours",
            insiderTip: "Place des Vosges is magical under dusk lanterns; find corner table seating at Carette for hot chocolate or a crisp Chablis."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Left Bank Elegance, Musée d'Orsay & The Eiffel Tower",
        highlight: "Standing under the iron arches of the Eiffel Tower and viewing Impressionist masterworks in a Beaux-Arts railway palace",
        dailyTip: "Book Eiffel Tower summit elevator tickets months in advance, or enjoy the lawns of Champ de Mars without waiting in line.",
        activities: [
          {
            id: "p-3-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: "Musée d'Orsay: Impressionist Treasures",
            location: "Esplanade Valéry Giscard d'Estaing, 7th arrondissement",
            description: "Housed in a spectacular 1900 Beaux-Arts railway terminal, discover world-renowned masterworks by Monet, Van Gogh, Renoir, Degas, and Cézanne under soaring skylights.",
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Head directly to the 5th floor gallery first to view the Impressionist masterpieces and peer through the giant clock face overlooking the Seine."
          },
          {
            id: "p-3-2",
            time: "12:00 PM - 02:00 PM",
            period: "Midday",
            title: "Saint-Germain-des-Prés Cafe & Luxembourg Gardens",
            location: "6th arrondissement",
            description: "Sip espresso at iconic literary cafes Les Deux Magots or Café de Flore, then stroll into the Luxembourg Gardens to watch vintage wooden sailboats glide on the central fountain pool.",
            category: "nature",
            estimatedDuration: "2 hours",
            insiderTip: "Pull up one of the iconic green metal chairs near the Medici Fountain for peaceful reading in the shade of chestnut trees."
          },
          {
            id: "p-3-3",
            time: "02:30 PM - 05:00 PM",
            period: "Afternoon",
            title: "Rue Cler Market Street & Invalides Golden Dome",
            location: "Rue Cler, 7th arrondissement",
            description: "Wander pedestrianized Rue Cler market street sampling Comté cheese, charcuterie, and macarons. Admire Napoleon's tomb beneath the golden dome of Hôtel des Invalides.",
            category: "food",
            estimatedDuration: "2.5 hours",
            insiderTip: "Fromagerie Marie Quatrehomme on nearby Rue de Sèvres is renowned as one of France's premier cheese affineurs."
          },
          {
            id: "p-3-4",
            time: "06:00 PM - 10:00 PM",
            period: "Evening",
            title: "Eiffel Tower & Trocadéro Sunset Celebration",
            location: "Champ de Mars & Place du Trocadéro",
            description: "Ascend the Eiffel Tower or spread a sunset picnic across the lawns of Champ de Mars. Cross Pont d'Iéna to Place du Trocadéro for postcard photographs as the tower sparkles.",
            category: "sightseeing",
            estimatedDuration: "4 hours",
            insiderTip: "The base of Passerelle Debilly pedestrian footbridge offers an unobstructed, crowd-free vantage point of the Eiffel Tower over water."
          }
        ]
      }
    ]
  }
};

export function generateGenericItinerary(cityInput: string): Itinerary {
  const cleanName = cityInput.trim().replace(/\b\w/g, c => c.toUpperCase());
  return {
    cityName: cleanName,
    tagline: `Experience the culture, landmarks, and authentic culinary soul of ${cleanName}`,
    overview: `An expertly balanced 3-day journey through ${cleanName}, showcasing signature cultural monuments, vibrant neighborhoods, local culinary delights, and unforgettable viewpoints.`,
    bestTimeToVisit: "Spring (April - June) or Autumn (September - November)",
    localCurrency: "Local Currency / Credit Cards Widely Accepted",
    gettingAround: "Public transit network, walking, and local ride-shares",
    topLocalFoods: [
      `Signature regional street food of ${cleanName}`,
      `Traditional artisanal breakfast pastries & specialty coffee`,
      `Locally sourced seasonal dinner specialties`,
      `Iconic local market treats and craft beverages`
    ],
    days: [
      {
        dayNumber: 1,
        title: "Historic Heart, Heritage & Landmark Wonders",
        highlight: `Discovering the foundational roots and iconic architecture of central ${cleanName}`,
        dailyTip: "Start your morning early at the main square to enjoy peaceful sightseeing before midday tour groups arrive.",
        activities: [
          {
            id: "g-1-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: `Historic Old Town & Central Heritage Landmark`,
            location: `Old Town Center, ${cleanName}`,
            description: `Begin your adventure exploring ${cleanName}'s foundational historic district. Marvel at centuries-old architecture, grand civic plazas, and storied heritage monuments.`,
            category: "sightseeing",
            estimatedDuration: "2.5 hours",
            insiderTip: "Check for guided walking tours departing the main plaza, or download an audio heritage guide for deep architectural context."
          },
          {
            id: "g-1-2",
            time: "12:00 PM - 01:30 PM",
            period: "Midday",
            title: `Traditional Market Hall & Artisanal Tasting`,
            location: `Central Market Quarter, ${cleanName}`,
            description: `Immerse your senses in the sights and aromas of ${cleanName}'s main market hall. Sample handcrafted cheeses, warm baked breads, and regional quick bites.`,
            category: "food",
            estimatedDuration: "1.5 hours",
            insiderTip: "Seek out vendors serving local working-class specialties for the most authentic flavors and friendly conversation."
          },
          {
            id: "g-1-3",
            time: "02:00 PM - 04:30 PM",
            period: "Afternoon",
            title: `City Arts & Cultural Museum`,
            location: `Museum District, ${cleanName}`,
            description: `Browse curated galleries celebrating regional history, fine visual arts, and archaeological treasures that shaped ${cleanName} through the ages.`,
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Most museums offer quiet inner courtyards or sculpture gardens with charming cafes for a refreshing afternoon rest."
          },
          {
            id: "g-1-4",
            time: "06:00 PM - 09:30 PM",
            period: "Evening",
            title: `Sunset Riverbank / Promenade Stroll & Welcome Dinner`,
            location: `Waterfront Promenade, ${cleanName}`,
            description: `Watch the sunset cast a golden glow across city towers during an evening stroll. Celebrate your arrival with a multi-course dinner at a cherished neighborhood eatery.`,
            category: "food",
            estimatedDuration: "3.5 hours",
            insiderTip: "Reserve a terrace table 30 minutes before twilight for optimal lighting and ambient people-watching."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Arts, Eclectic Neighborhoods & Panorama Views",
        highlight: `Panoramic sunset vistas and uncovering hidden indie boutiques and artisan cafes`,
        dailyTip: "Keep a transit pass handy as this day covers diverse neighborhoods across the city.",
        activities: [
          {
            id: "g-2-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: `Botanical Gardens or Grand Civic Park`,
            location: `Green Belt District, ${cleanName}`,
            description: `Enjoy a refreshing morning walk beneath lush canopies, tranquil reflective fountains, and manicured floral gardens in ${cleanName}'s premier green oasis.`,
            category: "nature",
            estimatedDuration: "2.5 hours",
            insiderTip: "Locate the historic greenhouse or conservatory pavilion for exquisite exotic botanical displays."
          },
          {
            id: "g-2-2",
            time: "12:00 PM - 02:00 PM",
            period: "Midday",
            title: `Bohemian Quarter Exploration & Cafe Lunch`,
            location: `Arts & Creative Quarter, ${cleanName}`,
            description: `Stroll through tree-lined side streets filled with independent bookstores, vintage vinyl shops, contemporary street art murals, and inviting specialty coffee roasters.`,
            category: "shopping",
            estimatedDuration: "2 hours",
            insiderTip: "Support local makers by checking out craft designer co-ops along the pedestrian side alleys."
          },
          {
            id: "g-2-3",
            time: "02:30 PM - 05:00 PM",
            period: "Afternoon",
            title: `Contemporary Architecture & Craft Workshops`,
            location: `Design District, ${cleanName}`,
            description: `Experience the modern pulse of ${cleanName} through striking modern structures, creative studios, and innovative public art installations.`,
            category: "culture",
            estimatedDuration: "2.5 hours",
            insiderTip: "Look out for open artist studios where craftspeople demonstrate ceramic pottery, leatherwork, or glassblowing."
          },
          {
            id: "g-2-4",
            time: "06:00 PM - 10:00 PM",
            period: "Evening",
            title: `Highest Hill Viewpoint & Live Music Supper`,
            location: `Summit Vista Point, ${cleanName}`,
            description: `Ascend to the highest scenic overlook to take in 360-degree night panoramas of ${cleanName}'s illuminated skyline, followed by dinner accompanied by acoustic local music.`,
            category: "nightlife",
            estimatedDuration: "4 hours",
            insiderTip: "Bring a light jacket as higher elevation viewpoints can become brisk once the sun sets."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Hidden Gems, Waterfront Breezes & Farewell Night",
        highlight: `A leisurely final day capturing authentic local rhythm and toast to memorable adventures`,
        dailyTip: "Pack your souvenirs and gifts during mid-afternoon so your final evening is completely stress-free.",
        activities: [
          {
            id: "g-3-1",
            time: "09:00 AM - 11:30 AM",
            period: "Morning",
            title: `Hidden Alleyways & Historic Monastery / Castle Ruins`,
            location: `Upper Quarter, ${cleanName}`,
            description: `Wander peaceful stone staircases and quiet residential corridors away from the bustling thoroughfares, discovering tranquil courtyards and heritage ruins.`,
            category: "sightseeing",
            estimatedDuration: "2.5 hours",
            insiderTip: "Early morning light produces the softest shadows against historic masonry for timeless travel photos."
          },
          {
            id: "g-3-2",
            time: "12:00 PM - 01:30 PM",
            period: "Midday",
            title: `Traditional Feast & Regional Dessert`,
            location: `Historic Quarter Tavern, ${cleanName}`,
            description: `Indulge in a celebratory lunch highlighting the most renowned culinary specialty of ${cleanName}, accompanied by local preserves and heritage sweets.`,
            category: "food",
            estimatedDuration: "1.5 hours",
            insiderTip: "Ask your server for their personal favorite family dessert recommendation."
          },
          {
            id: "g-3-3",
            time: "02:00 PM - 05:00 PM",
            period: "Afternoon",
            title: `Scenic Ferry, Harbor Cruise, or Riverside Stroll`,
            location: `Marina & Harbor Front, ${cleanName}`,
            description: `Gain a fresh perspective of ${cleanName} from the water. Relax to soothing breezes while cruising past islands, historic maritime docks, and modern bridges.`,
            category: "sightseeing",
            estimatedDuration: "3 hours",
            insiderTip: "Grab a seat on the upper open-air deck for 360-degree photography without window glass glare."
          },
          {
            id: "g-3-4",
            time: "06:30 PM - 10:00 PM",
            period: "Evening",
            title: `Rooftop Toast & Farewell Culinary Experience`,
            location: `Skyline Lounge & Gourmet Quarter, ${cleanName}`,
            description: `Conclude your 3-day adventure at a scenic rooftop terrace. Savor artisanal cocktails or mocktails overlooking the twinkling night lights, followed by an unforgettable farewell dinner.`,
            category: "nightlife",
            estimatedDuration: "3.5 hours",
            insiderTip: "Review your travel photo album with your travel companions while raising a glass to your next destination."
          }
        ]
      }
    ]
  };
}

export function getFallbackItinerary(cityName: string): Itinerary {
  const normalized = cityName.trim().toLowerCase();
  for (const key of Object.keys(fallbackDatabase)) {
    if (normalized.includes(key)) {
      return fallbackDatabase[key];
    }
  }
  return generateGenericItinerary(cityName);
}
