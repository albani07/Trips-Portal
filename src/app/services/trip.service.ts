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
      dificulty: 'Easy',
      activity: 'Hiking',
      // rating: Array < Rating >,
      // location: string,
      // mostPopular: boolean,
      // upComing: boolean,
      // imageCover: string,
      // reccomandations: string,
      // longDiscription: string,
      date: '06/06/2022'
      // itinerary: Array < Itinerary >
    },
    {
      id: '12334',
      destinationName: 'Valbone',
      price: 150,
      // shortDescription: string,
      dificulty: 'extreme',
      activity: 'Beach',
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
      dificulty: 'Easy',
      activity: 'Hiking',
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
    return this.trips.filter(
      trip => {
        
        //  THIS WORKS AND I HAVE TO ADD TRIP.DATE
          return (trip.destinationName.toLowerCase().includes(filters.destination.toLowerCase()) &&
           trip.dificulty==filters.difficulty && 
           trip.activity==filters.activity )
       


          // if(trip.activity!=null){
          //   return trip.activity==filters.activity
          // }else if(trip.dificulty!=null){
          //   return trip.activity== filters.activity
          // }else if( trip.destinationName!=null){
          //   return trip.destinationName.toLowerCase().includes(filters.destination.toLowerCase())
          // } else{
          //   return
          // }





        // if(trip.activity!=null && trip.dificulty!= null && trip.date!=null && trip.destinationName!= null){
          //   return(trip.activity==filters.activity, 
          //     trip.dificulty==filters.difficulty,
          //     trip.date==filters.date,
          //     trip.destinationName.toLowerCase().includes(filters.destination.toLowerCase())
          //     )
          //    } else{
            
        //      return (trip.destinationName.toLowerCase().includes(filters.destination.toLowerCase())||
        //      trip.activity==filters.activity ||
        //     trip.dificulty==filters.difficulty ||
        //     trip.date==filters.date
        //      )
        //    } 
        
        // return  trip.destinationName.toLowerCase().includes(destination.toLowerCase())



        // slpit filter.destination by space

        // filters.destination.split(' ').forEach((destination :any) => {
        //   return trip.destinationName.toLowerCase().includes(destination.toLowerCase())
        // });
        
      




         
      });
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
