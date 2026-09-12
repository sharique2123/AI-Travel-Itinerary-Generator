import { Compass, Globe } from 'lucide-react';

interface HeaderProps {
  onNewSearch?: () => void;
}

export function Header({ onNewSearch }: HeaderProps) {
  return (
    <header className="w-full border-b border-stone-200/80 bg-white/95 backdrop-blur-xs sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div 
          onClick={onNewSearch}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold text-stone-900 tracking-tight block leading-tight">
              3-Day Travel Itinerary
            </span>
            <span className="text-[11px] text-stone-500 font-medium tracking-wide block">
              Structured City Guides
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-stone-700">
            <Globe className="w-3.5 h-3.5 text-stone-500" />
            <span>Any Global City</span>
          </div>
        </div>
      </div>
    </header>
  );
}
