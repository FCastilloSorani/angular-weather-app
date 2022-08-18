import { Injectable } from '@angular/core';

// Environment
import { environment } from 'src/environments/environment';

// Interfaces
import { CurrentCoords } from '../interfaces/current-coords.interface';

// HTTP
import { HttpErrorResponse } from '@angular/common/http';

// RxJS
import { BehaviorSubject, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private geolocation: Geolocation = navigator.geolocation;

  private currentCoords = new BehaviorSubject<CurrentCoords>({
    latitude: environment.defaultLatitude,
    longitude: environment.defaultLongitude,
  });

  private geolocationOptions = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  };

  constructor() {
    if (this.geolocation) {
      this.geolocation.getCurrentPosition(
        (_currentPosition) => {
          this.setCurrentCoords({
            latitude: _currentPosition.coords.latitude,
            longitude: _currentPosition.coords.longitude,
          });
        },
        (err) => {
          this.setCurrentCoords({
            latitude: environment.defaultLatitude,
            longitude: environment.defaultLongitude,
          });
        },
        this.geolocationOptions
      );
    }
  }

  // GETTERS
  getCurrentCoords(): Observable<CurrentCoords> {
    return this.currentCoords.asObservable();
  }

  // SETTERS
  setCurrentCoords(coords: CurrentCoords) {
    return this.currentCoords.next(coords);
  }

  // Error
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
