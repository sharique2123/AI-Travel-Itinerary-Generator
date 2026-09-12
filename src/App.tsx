/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header.js';
import { CitySearchForm } from './components/CitySearchForm.js';
import { ItineraryOverview } from './components/ItineraryOverview.js';
import { DayScheduleView } from './components/DayScheduleView.js';
import { LoadingState } from './components/LoadingState.js';
import { EmptyState } from './components/EmptyState.js';
import { Itinerary } from './types.js';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function App() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<'gemini' | 'fallback'>('gemini');

  const handleGenerate = async (city: string, style = 'Balanced Highlights') => {
    if (!city.trim()) return;

    setIsLoading(true);
    setError(null);
    setCurrentCity(city.trim());

    try {
      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city: city.trim(),
          style,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to generate itinerary (${response.status})`);
      }

      const data = await response.json();
      if (!data.itinerary) {
        throw new Error('No itinerary data was returned.');
      }

      setItinerary(data.itinerary);
      setSource(data.source || 'gemini');
    } catch (err: any) {
      console.error('Itinerary generation error:', err);
      setError(err?.message || 'Unable to generate plan. Please try again or enter a different city.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setItinerary(null);
    setError(null);
    setCurrentCity('');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans antialiased selection:bg-stone-200">
      <Header onNewSearch={handleReset} />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 md:py-10 space-y-8">
        {/* Search input header section */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Plan Your Perfect 3-Day Journey
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Enter any city to generate a structured 3-day itinerary with exact time slots, curated activities, and neighborhood tips.
          </p>

          <div className="pt-2">
            <CitySearchForm 
              onGenerate={handleGenerate}
              isLoading={isLoading}
              initialCity={currentCity}
            />
          </div>
        </div>

        {/* Error notification banner */}
        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center justify-between gap-3 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              onClick={() => handleGenerate(currentCity)}
              className="px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-900 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* Active Content State */}
        {isLoading ? (
          <LoadingState city={currentCity} />
        ) : itinerary ? (
          <div className="space-y-8 animate-fade-in">
            <ItineraryOverview 
              itinerary={itinerary} 
              source={source} 
            />
            <DayScheduleView itinerary={itinerary} />
          </div>
        ) : (
          <EmptyState onSelectCity={(city) => handleGenerate(city)} />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-stone-200/80 bg-white py-6 mt-12 text-center text-xs text-stone-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Structured 3-Day Travel Itineraries • Real times, days & activities.
          </p>
          <div className="flex items-center gap-4">
            <button 
              type="button" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-stone-900 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
