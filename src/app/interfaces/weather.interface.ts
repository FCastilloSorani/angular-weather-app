import { Current } from './current-weather.interface';
import { Daily } from './daily-weather.interface';
import { Hourly } from './hourly-weather.interface';
export interface Weather {
  lat: number;
  lon: number;
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}
