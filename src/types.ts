export type ActivityCategory = 'sightseeing' | 'food' | 'culture' | 'nature' | 'shopping' | 'nightlife';

export interface Activity {
  id?: string;
  time: string;
  period?: 'Morning' | 'Midday' | 'Afternoon' | 'Evening' | string;
  title: string;
  location: string;
  description: string;
  category: ActivityCategory | string;
  estimatedDuration: string;
  insiderTip?: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  highlight: string;
  activities: Activity[];
  dailyTip?: string;
}

export interface Itinerary {
  cityName: string;
  tagline: string;
  overview: string;
  bestTimeToVisit?: string;
  localCurrency?: string;
  gettingAround?: string;
  days: DayPlan[];
  topLocalFoods?: string[];
}

export interface GenerateRequest {
  city: string;
  style?: string;
}
