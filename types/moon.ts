export type MoonData = {
  phase_name: string;                  // "Waxing Gibbous"
  stage?: 'waxing' | 'waning' | 'new' | 'full' | string;
  daysUntilFull?: number | null;  // 2
  daysUntilNew?: number | null;   // 17

  // Optional fields your UI might support later:
  illumination?: number | null;
  age?: number | null;
  rise?: string | null;
  set?: string | null;
  datestamp?: string | null;
  timestamp?: number | null;
};