import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { CurrentConditions } from 'src/app/interfaces/current-conditions.interface';
import { CurrentWeather } from 'src/app/interfaces/current-weather.interface';
import { WeatherIconData } from 'src/app/interfaces/weather-icon-data.interface';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  @Input() fetchedCurrentWeather!: CurrentWeather;

  currentConditions!: CurrentConditions;

  weatherIconData!: WeatherIconData;

  constructor() {}

  ngOnInit(): void {
    this.weatherIconData = this.fetchedCurrentWeather.weather[0];

    this.currentConditions = this.setCurrentConditions(
      this.fetchedCurrentWeather
    );
  }

  setCurrentConditions(_currentWeather: CurrentWeather): CurrentConditions {
    const currentConditions = {
      feelsLike: Math.round(this.fetchedCurrentWeather.feels_like),
      humidity: Math.round(this.fetchedCurrentWeather.humidity),
      temp: Math.round(this.fetchedCurrentWeather.temp),
      lastUpdate: new Date(this.fetchedCurrentWeather.dt * 1000),
      sunrise: new Date(this.fetchedCurrentWeather.sunrise * 1000),
      sunset: new Date(this.fetchedCurrentWeather.sunset * 1000),
    };

    return currentConditions;
  }
}
