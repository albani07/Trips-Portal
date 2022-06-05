import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  trips = [
    {
      id: '123',
      destinationName: 'Theth',
      price: 150,
      // shortDescription: string,
      // dificulty: string,
      // activity: string,
      // rating: Array < Rating >,
      // location: string,
      // mostPopular: boolean,
      // upComing: boolean,
      // imageCover: string,
      // reccomandations: string,
      // longDiscription: string,
      // itinerary: Array < Itinerary >
    },
    {
      id: '12334',
      destinationName: 'Valbone',
      price: 150,
      // shortDescription: string,
      // dificulty: string,
      // activity: string,
      // rating: Array < Rating >,
      // location: string,
      // mostPopular: boolean,
      // upComing: boolean,
      // imageCover: string,
      // reccomandations: string,
      // longDiscription: string,
      // itinerary: Array < Itinerary >
    },
    {
      id: '12334',
      destinationName: 'Pashtrik',
      price: 150,
      // shortDescription: string,
      // dificulty: string,
      // activity: string,
      // rating: Array < Rating >,
      // location: string,
      // mostPopular: boolean,
      // upComing: true,
      // imageCover: string,
      // reccomandations: string,
      // longDiscription: string,
      // itinerary: Array < Itinerary >
    },
  ];;

  constructor() { }

  all() {
    // ToDo: get all trips from localStorage

    return this.trips;
  }

  filter(filters: any) {
    return this.trips;
  }

  // popular() { 
  // bussines logic here
  // return trips.filter(trip => trip.popular == true);
  // }

  // upcoming() { // bussines logic here }

  find(id: any) {
    // ToDo: get a single trip from id
    console.log(id);

    // return single trip
  }

  // create

  // edit

  // delete
}
