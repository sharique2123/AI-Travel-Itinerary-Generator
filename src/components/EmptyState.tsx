import { MapPin, Calendar, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface EmptyStateProps {
  onSelectCity: (city: string) => void;
}

const FEATURED_DESTINATIONS = [
  {
    city: 'Kyoto',
    country: 'Japan',
    subtitle: 'Shrines, Zen Gardens & Traditional Machiya',
    highlights: 'Sensō-ji, Arashiyama, Gion Geisha District',
    tag: 'Cultural Heritage'
  },
  {
    city: 'Paris',
    country: 'France',
    subtitle: 'Art, Romantic Boulevards & Culinary Mastery',
    highlights: 'Louvre, Montmartre, Seine River at Dusk',
    tag: 'Art & Gastronomy'
  },
  {
    city: 'Rome',
    country: 'Italy',
    subtitle: 'Ancient Wonders, Piazzas & Handcrafted Gelato',
    highlights: 'Colosseum, Pantheon, Trastevere Dinners',
    tag: 'Ancient History'
  }
];

export function EmptyState({ onSelectCity }: EmptyStateProps) {
  return (
    <div id="itinerary-empty-state" className="w-full max-w-4xl mx-auto py-10 px-4 text-center">
      {/* What the app does highlight */}
      <div className="max-w-2xl mx-auto mb-10 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
          Where would you like to travel for 3 days?
        </h2>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Type any city name above to instantly generate a structured 3-day travel itinerary with daily morning-to-night schedules, exact time blocks, locations, and insider advice.
        </p>
      </div>

      {/* Feature cards row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        {FEATURED_DESTINATIONS.map((dest) => (
          <button
            key={dest.city}
            type="button"
            onClick={() => onSelectCity(dest.city)}
            className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white border border-stone-200/80 hover:border-stone-400 hover:shadow-md transition-all cursor-pointer text-left"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-700">
                  {dest.tag}
                </span>
                <span className="text-xs font-semibold text-stone-400 group-hover:text-stone-900 transition-colors">
                  3 Days
                </span>
              </div>

              <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                {dest.city}
              </h3>
              <p className="text-xs text-stone-500 font-medium mb-2.5">
                {dest.country}
              </p>

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {dest.subtitle}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700 group-hover:text-stone-950">
              <span>View 3-Day Plan</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      {/* Structured format guarantees */}
      <div className="mt-12 p-6 rounded-2xl bg-stone-50 border border-stone-200/60 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-stone-600 text-xs">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-stone-800" />
          <span className="font-medium">Structured Day 1, 2 & 3 Plans</span>
        </div>
        <div className="hidden sm:block text-stone-300">•</div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-stone-800" />
          <span className="font-medium">Morning to Night Time Blocks</span>
        </div>
        <div className="hidden sm:block text-stone-300">•</div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-stone-800" />
          <span className="font-medium">Real Landmarks & Local Tips</span>
        </div>
      </div>
    </div>
  );
}
