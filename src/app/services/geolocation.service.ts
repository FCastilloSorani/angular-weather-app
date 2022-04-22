import { Injectable } from '@angular/core';

// Environment
import { environment } from 'src/environments/environment';

// Interfaces
import { CurrentCoords } from '../interfaces/current-coords.interface';

// HTTP
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RxJS
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private currentCoords = new BehaviorSubject<CurrentCoords>({
    latitude: environment.defaultLatitude,
    longitude: environment.defaultLongitude,
  });

  private options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (currentPosition) => {
          this.setCurrentCoords({
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          });
        },
        (error) => {
          this.currentCoords.next({
            latitude: environment.defaultLatitude,
            longitude: environment.defaultLongitude,
          });
        },
        this.options
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
