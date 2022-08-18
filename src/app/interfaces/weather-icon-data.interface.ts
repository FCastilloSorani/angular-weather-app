import {
  AtmosphereConditions,
  CloudsConditions,
  DrizzleConditions,
  RainConditions,
  SnowConditions,
  ThunderstormConditions,
} from '../enums/weather-conditions.enum';

export interface WeatherIconData {
  description: string;
  icon: string;
  id:
    | ThunderstormConditions
    | DrizzleConditions
    | RainConditions
    | SnowConditions
    | AtmosphereConditions
    | CloudsConditions;
  main: string;
}
