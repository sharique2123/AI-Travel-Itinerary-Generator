import { useState } from 'react';
import { Itinerary } from '../types.js';
import { 
  Calendar, 
  Coins, 
  Bus, 
  Utensils, 
  Copy, 
  Check, 
  Printer, 
  Share2, 
  MapPin, 
  Sparkles
} from 'lucide-react';

interface ItineraryOverviewProps {
  itinerary: Itinerary;
  source?: 'gemini' | 'fallback';
}

export function ItineraryOverview({ itinerary, source }: ItineraryOverviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    let text = `3-DAY TRAVEL ITINERARY: ${itinerary.cityName.toUpperCase()}\n`;
    text += `"${itinerary.tagline}"\n\n`;
    text += `Overview:\n${itinerary.overview}\n\n`;
    
    if (itinerary.bestTimeToVisit) {
      text += `Best Time to Visit: ${itinerary.bestTimeToVisit}\n`;
    }
    if (itinerary.gettingAround) {
      text += `Getting Around: ${itinerary.gettingAround}\n`;
    }
    if (itinerary.localCurrency) {
      text += `Local Currency: ${itinerary.localCurrency}\n`;
    }
    if (itinerary.topLocalFoods && itinerary.topLocalFoods.length > 0) {
      text += `Must-Try Foods: ${itinerary.topLocalFoods.join(', ')}\n`;
    }
    text += `\n=========================================\n\n`;

    itinerary.days.forEach((d) => {
      text += `DAY ${d.dayNumber}: ${d.title}\n`;
      text += `Highlight: ${d.highlight}\n`;
      if (d.dailyTip) text += `Daily Tip: ${d.dailyTip}\n`;
      text += `\nSCHEDULE:\n`;
      d.activities.forEach((act) => {
        text += `• ${act.time} [${act.category}] - ${act.title} (${act.location})\n`;
        text += `  ${act.description}\n`;
        if (act.insiderTip) text += `  Insider Tip: ${act.insiderTip}\n`;
      });
      text += `\n-----------------------------------------\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="itinerary-overview-card" className="w-full bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-xs">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-100">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-white tracking-wide">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>3-Day Itinerary</span>
            </span>

            {source === 'gemini' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                AI Generated
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-700">
                Curated Travel Guide
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            {itinerary.cityName}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-medium italic">
            "{itinerary.tagline}"
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0 self-start">
          <button
            id="copy-plan-button"
            type="button"
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium transition-colors shadow-2xs"
            title="Copy formatted plan to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-500" />
                <span>Copy Plan</span>
              </>
            )}
          </button>

          <button
            id="print-plan-button"
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium transition-colors shadow-2xs"
            title="Print or save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-stone-500" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Summary Narrative */}
      <div className="py-5">
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          {itinerary.overview}
        </p>
      </div>

      {/* Essential Travel Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {itinerary.bestTimeToVisit && (
          <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/60">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium mb-1">
              <Calendar className="w-3.5 h-3.5 text-stone-700" />
              <span>Best Season</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-800">
              {itinerary.bestTimeToVisit}
            </p>
          </div>
        )}

        {itinerary.gettingAround && (
          <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/60">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium mb-1">
              <Bus className="w-3.5 h-3.5 text-stone-700" />
              <span>Getting Around</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-800">
              {itinerary.gettingAround}
            </p>
          </div>
        )}

        {itinerary.localCurrency && (
          <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/60">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium mb-1">
              <Coins className="w-3.5 h-3.5 text-stone-700" />
              <span>Currency</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-800">
              {itinerary.localCurrency}
            </p>
          </div>
        )}

        {itinerary.topLocalFoods && itinerary.topLocalFoods.length > 0 && (
          <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/60">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium mb-1">
              <Utensils className="w-3.5 h-3.5 text-stone-700" />
              <span>Must-Try Bites</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-800 line-clamp-2">
              {itinerary.topLocalFoods.slice(0, 2).join(', ')}
            </p>
          </div>
        )}
      </div>

      {/* Must Try Food tags if more than 2 */}
      {itinerary.topLocalFoods && itinerary.topLocalFoods.length > 2 && (
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-stone-500 font-medium">Iconic culinary specialties:</span>
          {itinerary.topLocalFoods.map((food, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200/60 font-medium">
              🍽️ {food}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
