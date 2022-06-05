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
      imageUrl: "assets/images/img1.jpg",
      // shortDescription: string,
      // dificulty: string,
      // activity: string,
      // rating: Array < Rating >,
      // location: string,
      mostPopular: true,
      upComing: false,
      // imageCover: string,
      // reccomandations: string,
      // longDiscription: string,
      // itinerary: Array < Itinerary >
    },
    {
      id: '12334',
      destinationName: 'Valbone',
      price: 150,
      imageUrl: "assets/images/img2.jpg",
      // shortDescription: string,
      // dificulty: string,
      // activity: string,
      // rating: Array < Rating >,
      // location: string,
      mostPopular: true,
      upComing: true,
      // imageCover: string,
      // reccomandations: string,
      // longDiscription: string,
      // itinerary: Array < Itinerary >
    },
    {
      id: '12334',
      destinationName: 'Pashtrik',
      price: 150,
      imageUrl: "assets/images/img3.jpg",
      // shortDescription: string,
      // dificulty: string,
      // activity: string,
      // rating: Array < Rating >,
      // location: string,
      mostPopular: false,
      upComing: false,
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

  popular() {
    return this.trips.filter(trip => trip.mostPopular === true);
  }

  upcoming() {
    return this.trips.filter(trip => trip.upComing === true);
  }

  find(id: any) {
    // ToDo: get a single trip from id
    console.log(id);

    // return single trip
  }

  // create

  // edit

  // delete
}
