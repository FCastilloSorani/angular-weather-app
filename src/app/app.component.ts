import { Component, OnInit } from '@angular/core';

// Interfaces
import { CurrentCoords } from './interfaces/current-coords.interface';
import { CurrentWeather } from './interfaces/current-weather.interface';
import { Weather } from './interfaces/weather.interface';

// RxJS
import { iif, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

// Services
import { GeolocationService } from './services/geolocation.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fetchedCurrentWeather!: CurrentWeather;

  ready: boolean = false;

  getCurrentCoords: Observable<CurrentCoords> =
    this.geolocationService.getCurrentCoords();

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getCurrentCoords
      .pipe(
        switchMap((_currentCoords: CurrentCoords) => {
          return iif(
            () => !!_currentCoords.latitude && !!_currentCoords.longitude,
            this.weatherService.getWeather(
              _currentCoords.latitude!,
              _currentCoords.longitude!
            )
          );
        }),
        tap((_weather: Weather) => {
          this.fetchedCurrentWeather = this.weatherService.getCurrent(_weather);
          this.ready = true;
        })
      )
      .subscribe();
  }
}
