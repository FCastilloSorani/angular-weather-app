import { CurrentWeather } from './current-weather.interface';
import { Daily } from './daily-weather.interface';
import { Hourly } from './hourly-weather.interface';
export interface Weather {
  lat: number;
  lon: number;
  current: CurrentWeather;
  hourly: Hourly[];
  daily: Daily[];
}
