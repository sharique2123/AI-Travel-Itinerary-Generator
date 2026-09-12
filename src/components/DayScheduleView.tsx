import { useState } from 'react';
import { Itinerary, DayPlan } from '../types.js';
import { ActivityCard } from './ActivityCard.js';
import { Calendar, Compass, Sparkles, Info, CheckCircle2 } from 'lucide-react';

interface DayScheduleViewProps {
  itinerary: Itinerary;
}

export function DayScheduleView({ itinerary }: DayScheduleViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | number>('all');

  const filteredDays = activeTab === 'all' 
    ? itinerary.days 
    : itinerary.days.filter((d) => d.dayNumber === activeTab);

  return (
    <div id="day-schedule-view" className="w-full space-y-8">
      {/* Tab filter bar */}
      <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          <button
            id="tab-all-days"
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
              activeTab === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
            }`}
          >
            All 3 Days
          </button>

          {itinerary.days.map((day) => (
            <button
              key={day.dayNumber}
              id={`tab-day-${day.dayNumber}`}
              type="button"
              onClick={() => setActiveTab(day.dayNumber)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === day.dayNumber
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
              }`}
            >
              Day {day.dayNumber}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-stone-500 font-medium shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Complete 3-day itinerary</span>
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-10">
        {filteredDays.map((day) => (
          <section 
            key={day.dayNumber}
            id={`day-section-${day.dayNumber}`}
            className="space-y-4"
          >
            {/* Day Header Box */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 p-5 rounded-2xl bg-stone-100/90 border border-stone-200/70">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider">
                    Day {day.dayNumber}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                    {day.title}
                  </h3>
                </div>

                {day.highlight && (
                  <p className="text-xs sm:text-sm text-stone-600 font-medium flex items-center gap-1.5 pt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Highlight: {day.highlight}</span>
                  </p>
                )}
              </div>

              <div className="text-xs font-semibold text-stone-500 shrink-0 sm:text-right">
                {day.activities.length} Planned Activities
              </div>
            </div>

            {/* Daily Practical Logistics Tip */}
            {day.dailyTip && (
              <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-blue-50/70 border border-blue-200/50 text-xs text-blue-950">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-semibold text-blue-900">Route Note: </span>
                  <span>{day.dailyTip}</span>
                </div>
              </div>
            )}

            {/* Activities Vertical Flow */}
            <div className="grid grid-cols-1 gap-3.5 pt-1">
              {day.activities.map((activity, actIdx) => (
                <ActivityCard 
                  key={activity.id || `act-${day.dayNumber}-${actIdx}`}
                  activity={activity}
                  index={actIdx}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
