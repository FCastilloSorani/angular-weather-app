import { Component, OnInit } from '@angular/core';

// Interfaces
import { Weather } from './interfaces/weather.interface';
import { CurrentCoords } from './interfaces/current-coords.interface';

// RxJS
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

          return this.weatherService.getWeather(
            this.currentCoords.latitude!,
            this.currentCoords.longitude!
          );
        })
      )
      .subscribe((_weather: Weather) => {
        this.fetchedWeather = _weather;

        console.log(this.weatherService.getNext24Hours(_weather));
      });
  }
}
