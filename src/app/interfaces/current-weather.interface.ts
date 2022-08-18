import {
  AtmosphereConditions,
  CloudsConditions,
  DrizzleConditions,
  RainConditions,
  SnowConditions,
  ThunderstormConditions,
} from '../enums/weather-conditions.enum';

export interface CurrentWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id:
        | ThunderstormConditions
        | DrizzleConditions
        | RainConditions
        | SnowConditions
        | AtmosphereConditions
        | CloudsConditions;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
