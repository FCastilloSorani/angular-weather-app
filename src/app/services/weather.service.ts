import { Injectable } from '@angular/core';

// Environment
import { environment } from 'src/environments/environment';

// Interfaces
import { CurrentWeather } from '../interfaces/current-weather.interface';
import { Daily } from '../interfaces/daily-weather.interface';
import { Hourly } from '../interfaces/hourly-weather.interface';
import { Weather } from '../interfaces/weather.interface';

// HTTP
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RxJS
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private params = {
    appid: environment.API_KEY,
    lang: 'es',
    units: 'metric',
  };

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<Weather> {
    const url = `/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.params.appid}&lang=${this.params.lang}&units=${this.params.units}&exclude=minutely`;

    return this.http.get<Weather>(url).pipe(catchError(this.handleError));
  }

  getCurrent(_weather: Weather): CurrentWeather {
    return _weather.current;
  }

  getHourly(_weather: Weather): Hourly[] {
    return _weather.hourly;
  }

  getDaily(_weather: Weather): Daily[] {
    return _weather.daily;
  }

  getNext24Hours(_weather: Weather): Hourly[] {
    return _weather.hourly.slice(0, 24);
  }

  // Error handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again later.');
  }
}
