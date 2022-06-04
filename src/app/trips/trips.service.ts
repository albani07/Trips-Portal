import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TRIPS } from '../shared/mock-trip';
import { Trips } from '../shared/trips';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  getTrips():Observable<Trips[]>{
    return of (TRIPS)
  }
}
