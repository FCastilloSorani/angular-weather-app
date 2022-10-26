export enum ThunderstormConditions {
  ThunderstormWithLightRain = 200,
  ThunderstormWithRain = 201,
  ThunderstormWithHeavyRain = 202,
  LightThunderstorm = 210,
  Thunderstorm = 211,
  HeavyThunderstorm = 212,
  RaggedThunderstorm = 221,
  ThunderstormWithLightDrizzle = 230,
  ThunderstormWithDrizzle = 231,
  ThunderstormWithHeavyDrizzle = 232,
}

export enum DrizzleConditions {
  LightIntensityDrizzle = 300,
  Drizzle = 301,
  HeavyIntensityDrizzle = 302,
  LightIntensityDrizzleRain = 310,
  DrizzleRain = 311,
  HeavyIntensityDrizzleRain = 312,
  ShowerRainAndDrizzle = 313,
  HeavyShowerRainAndDrizzle = 314,
  ShowerDrizzle = 321,
}

export enum RainConditions {
  LightRain = 500,
  ModerateRain = 501,
  HeavyIntensityRain = 502,
  VeryHeavyRain = 503,
  ExtremeRain = 504,
  FreezingRain = 511,
  LightIntensityShowerRain = 520,
  ShowerRain = 521,
  HeavyIntensityShowerRain = 522,
  RaggedShowerRain = 531,
}

export enum SnowConditions {
  LightSnow = 600,
  Snow = 601,
  HeavySnow = 602,
  Sleet = 611,
  ShowerSleet = 612,
  LightRainAndSnow = 615,
  RainAndSnow = 616,
  LightShowerSnow = 620,
  ShowerSnow = 621,
  HeavyShowerSnow = 622,
}

export const AtmosphereConditions = {
  Mist: 701,
  Smoke: 711,
  Haze: 721,
  SandDustWhirls: 731,
  Fog: 741,
  Sand: 751,
  Dust: 761,
  VolcanicAsh: 762,
  Squalls: 771,
  Tornado: 781,
};

export const CloudsConditions = {
  ClearSky: 800,
  FewClouds: 801,
  ScatteredClouds: 802,
  BrokenClouds: 803,
  OvercastClouds: 804,
};
