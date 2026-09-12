import { useState, FormEvent } from 'react';
import { Search, Sparkles, MapPin, Compass } from 'lucide-react';

interface CitySearchFormProps {
  onGenerate: (city: string, style: string) => void;
  isLoading: boolean;
  initialCity?: string;
}

const POPULAR_CITIES = [
  { name: 'Kyoto', country: 'Japan', icon: '⛩️' },
  { name: 'Paris', country: 'France', icon: '🗼' },
  { name: 'Tokyo', country: 'Japan', icon: '🏯' },
  { name: 'Rome', country: 'Italy', icon: '🏛️' },
  { name: 'Barcelona', country: 'Spain', icon: '🎨' },
  { name: 'New York', country: 'USA', icon: '🗽' },
];

const TRAVEL_STYLES = [
  'Balanced Highlights',
  'Culture & History',
  'Foodie & Culinary',
  'Scenic & Relaxed'
];

export function CitySearchForm({ onGenerate, isLoading, initialCity = '' }: CitySearchFormProps) {
  const [cityInput, setCityInput] = useState(initialCity);
  const [selectedStyle, setSelectedStyle] = useState('Balanced Highlights');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!cityInput.trim() || isLoading) return;
    onGenerate(cityInput.trim(), selectedStyle);
  };

  const handleSelectCity = (city: string) => {
    setCityInput(city);
    onGenerate(city, selectedStyle);
  };

  return (
    <div id="city-search-container" className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 bg-white rounded-2xl border border-stone-200 shadow-sm focus-within:border-stone-400 focus-within:ring-2 focus-within:ring-stone-200 transition-all">
          <div className="flex-1 flex items-center gap-3 px-3 py-1">
            <Search className="w-5 h-5 text-stone-400 shrink-0" />
            <input
              id="city-input-field"
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder="Enter any destination city (e.g. Kyoto, Florence, Lisbon)..."
              disabled={isLoading}
              className="w-full bg-transparent border-none outline-none text-stone-900 placeholder:text-stone-400 text-base font-normal"
              autoComplete="off"
            />
          </div>

          <button
            id="generate-itinerary-button"
            type="submit"
            disabled={!cityInput.trim() || isLoading}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all shrink-0 ${
              !cityInput.trim() || isLoading
                ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm active:scale-[0.99]'
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate 3-Day Plan</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Style & Suggestions Area */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Style selection */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-stone-500 font-medium flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" /> Style:
          </span>
          {TRAVEL_STYLES.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => setSelectedStyle(style)}
              disabled={isLoading}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                selectedStyle === style
                  ? 'bg-stone-900 text-white font-medium shadow-xs'
                  : 'bg-stone-100/80 hover:bg-stone-200/70 text-stone-700'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Quick popular city shortcuts */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-stone-500 font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-stone-400" /> Quick:
          </span>
          {POPULAR_CITIES.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => handleSelectCity(c.name)}
              disabled={isLoading}
              className="px-2 py-0.5 rounded-md bg-stone-100/90 hover:bg-stone-200 text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              <span className="mr-1 text-[11px]">{c.icon}</span>
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
