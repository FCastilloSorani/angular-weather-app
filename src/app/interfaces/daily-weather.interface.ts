import {
  AtmosphereConditions,
  CloudsConditions,
  DrizzleConditions,
  RainConditions,
  SnowConditions,
  ThunderstormConditions,
} from '../enums/weather-conditions.enum';

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: [
    {
      id:
        | AtmosphereConditions
        | CloudsConditions
        | DrizzleConditions
        | RainConditions
        | SnowConditions
        | ThunderstormConditions;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}
