import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Interfaces
import { CurrentConditions } from 'src/app/interfaces/current-conditions.interface';
import { CurrentWeather } from 'src/app/interfaces/current-weather.interface';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnChanges {
  @Input() fetchedCurrentWeather!: CurrentWeather;

  currentConditions!: CurrentConditions;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fetchedCurrentWeather.currentValue) {
      this.currentConditions = this.setCurrentConditions(
        changes.fetchedCurrentWeather.currentValue
      );
    }
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
