import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// Interfaces
import { Current } from 'src/app/interfaces/current-weather.interface';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit, OnChanges {
  @Input() fetchedCurrentWeather!: Current;

  currentFeelsLike!: number;
  currentHumidity!: number;
  currentTemp!: number;
  lastUpdate!: Date;
  sunrise!: Date;
  sunset!: Date;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fetchedCurrentWeather.currentValue) {
      this.currentFeelsLike = Math.round(this.fetchedCurrentWeather.feels_like);
      this.currentHumidity = Math.round(this.fetchedCurrentWeather.humidity);
      this.currentTemp = Math.round(this.fetchedCurrentWeather.temp);
      this.lastUpdate = new Date(this.fetchedCurrentWeather.dt * 1000);
      this.sunrise = new Date(this.fetchedCurrentWeather.sunrise * 1000);
      this.sunset = new Date(this.fetchedCurrentWeather.sunset * 1000);
    }
  }
}
