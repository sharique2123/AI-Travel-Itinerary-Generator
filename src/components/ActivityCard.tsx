import { Activity } from '../types.js';
import { 
  Clock, 
  MapPin, 
  Lightbulb, 
  Landmark, 
  Utensils, 
  Sparkles, 
  Trees, 
  ShoppingBag, 
  Moon,
  Compass
} from 'lucide-react';

interface ActivityCardProps {
  key?: string | number;
  activity: Activity;
  index: number;
}

export function ActivityCard({ activity, index }: ActivityCardProps) {
  const getCategoryMeta = (category?: string) => {
    const cat = category?.toLowerCase() || '';
    if (cat.includes('food') || cat.includes('dining') || cat.includes('culinary')) {
      return {
        label: 'Dining & Flavors',
        icon: Utensils,
        badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/60',
        dotClass: 'bg-amber-500'
      };
    }
    if (cat.includes('culture') || cat.includes('art') || cat.includes('history')) {
      return {
        label: 'Culture & Heritage',
        icon: Landmark,
        badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200/60',
        dotClass: 'bg-indigo-500'
      };
    }
    if (cat.includes('nature') || cat.includes('park') || cat.includes('outdoor')) {
      return {
        label: 'Nature & Scenic',
        icon: Trees,
        badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
        dotClass: 'bg-emerald-500'
      };
    }
    if (cat.includes('shop')) {
      return {
        label: 'Shopping & Craft',
        icon: ShoppingBag,
        badgeClass: 'bg-rose-50 text-rose-800 border-rose-200/60',
        dotClass: 'bg-rose-500'
      };
    }
    if (cat.includes('night') || cat.includes('bar') || cat.includes('entertainment')) {
      return {
        label: 'Evening & Nightlife',
        icon: Moon,
        badgeClass: 'bg-purple-50 text-purple-800 border-purple-200/60',
        dotClass: 'bg-purple-500'
      };
    }
    return {
      label: 'Sightseeing',
      icon: Sparkles,
      badgeClass: 'bg-sky-50 text-sky-800 border-sky-200/60',
      dotClass: 'bg-sky-500'
    };
  };

  const meta = getCategoryMeta(activity.category);
  const IconComponent = meta.icon;

  return (
    <div 
      id={`activity-item-${index}`}
      className="relative flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200"
    >
      {/* Time & Duration Column */}
      <div className="md:w-56 shrink-0 flex flex-col justify-start gap-2 border-b md:border-b-0 md:border-r border-stone-100 pb-3 md:pb-0 md:pr-4">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${meta.dotClass} shrink-0`} />
          <div className="flex items-center gap-1.5 text-stone-900 font-semibold text-sm tracking-tight">
            <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>{activity.time}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {activity.period && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md font-medium bg-stone-100 text-stone-700">
              {activity.period}
            </span>
          )}
          {activity.estimatedDuration && (
            <span className="inline-flex items-center gap-1 text-stone-500">
              <span>•</span>
              <span>{activity.estimatedDuration}</span>
            </span>
          )}
        </div>

        <div className="mt-1">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border ${meta.badgeClass}`}>
            <IconComponent className="w-3 h-3" />
            <span>{meta.label}</span>
          </span>
        </div>
      </div>

      {/* Activity Details Column */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
            <h4 className="text-base font-semibold text-stone-900 tracking-tight">
              {activity.title}
            </h4>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{activity.location}</span>
          </div>

          <p className="text-sm text-stone-700 leading-relaxed">
            {activity.description}
          </p>
        </div>

        {activity.insiderTip && (
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/70 border border-amber-200/50 text-xs text-amber-950">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold text-amber-900">Insider Tip: </span>
              <span>{activity.insiderTip}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
