import { Component, OnInit } from '@angular/core';

// Interfaces
import { Current } from './interfaces/current-weather.interface';
import { CurrentCoords } from './interfaces/current-coords.interface';
import { Weather } from './interfaces/weather.interface';

// RxJS
import { EMPTY, iif } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Services
import { GeolocationService } from './services/geolocation.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fetchedWeather!: any;

  currentCoords!: CurrentCoords;

  currentWeather!: Current;

  ready: boolean = false;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.geolocationService
      .getCurrentCoords()
      .pipe(
        switchMap((_currentCoords: CurrentCoords) => {
          this.currentCoords = _currentCoords;

          return iif(
            () =>
              this.currentCoords.latitude == 0 &&
              this.currentCoords.longitude == 0,
            EMPTY,
            this.weatherService.getWeather(
              this.currentCoords.latitude!,
              this.currentCoords.longitude!
            )
          );
        })
      )
      .subscribe((_weather: Weather) => {
        this.fetchedWeather = _weather;

        this.currentWeather = this.weatherService.getCurrent(
          this.fetchedWeather
        );

        this.ready = true;
      });
  }
}
