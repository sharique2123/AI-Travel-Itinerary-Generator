import { useEffect, useState } from 'react';
import { Compass, Sparkles, MapPin, Clock } from 'lucide-react';

interface LoadingStateProps {
  city: string;
}

const STEPS = [
  'Scouting iconic landmarks and authentic neighborhood treasures...',
  'Organizing morning, afternoon, and evening timelines...',
  'Clustering activities geographically for smooth transit...',
  'Finalizing insider tips, timing schedules, and local culinary gems...'
];

export function LoadingState({ city }: LoadingStateProps) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="itinerary-loading-state" className="w-full max-w-2xl mx-auto py-16 px-6 text-center">
      <div className="relative inline-flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-lg animate-pulse">
          <Compass className="w-8 h-8 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-stone-900 tracking-tight mb-2">
        Crafting Your 3-Day Plan for {city}
      </h3>
      <p className="text-sm text-stone-500 max-w-md mx-auto mb-8">
        Structuring full daily schedules with activities, exact time slots, locations, and traveler tips.
      </p>

      {/* Progress indicator */}
      <div className="max-w-md mx-auto space-y-3">
        <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-stone-900 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-600 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>{STEPS[stepIndex]}</span>
        </div>
      </div>
    </div>
  );
}
