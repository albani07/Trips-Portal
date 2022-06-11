import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  trips = [
    {
      id: '111',
      destinationName: 'Theth',
      price: 150,
      imageUrl: 'assets/images/img1.jpg',
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
      id: '112',
      destinationName: 'Valbone',
      price: 150,
      imageUrl: 'assets/images/img2.jpg',
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
      imageUrl: 'assets/images/img3.jpg',
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

    {
      id: '114',
      destinationName: 'Dardhe',
      price: 60,
      shortDescription:
        'This famous village is one of the main destinations to visit.',
      imageUrl: 'assets/images/cardsimg/dardhe.jpg',
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
      id: '115',
      destinationName: 'Korce',
      price: 35,
      shortDescription:
        "Korçë is often thought of as one of Albania's most beautiful cities.",
      imageUrl: 'assets/images/cardsimg/korce.jpg',
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
      id: '116',
      destinationName: 'Shkoder',
      price: 40,
      shortDescription:
        'Plenty of things to do that make it a worthy stopping point.',
      imageUrl: 'assets/images/cardsimg/shkoder.jpg',
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
      id: '117',
      destinationName: 'Sarande',
      price: 90,
      shortDescription:
        'Explore the unofficial capital of the Albanian Riviera.',
      imageUrl: 'assets/images/cardsimg/sarande.jpg',
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
      id: '118',
      destinationName: 'Dhermi',
      price: 100,
      shortDescription: 'Sea, nature, typicall village and summer festivals.',
      imageUrl: 'assets/images/cardsimg/dhermi.jpg',
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
      id: '119',
      destinationName: 'Gjirokaster',
      price: 50,
      shortDescription:
        'Visit the City of Stone in ain a dramatic and eye-catching way.',
      imageUrl: 'assets/images/cardsimg/gjirokaster.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '120',
      destinationName: 'Berat',
      price: 40,
      shortDescription:
        'The pride of Albanian architecture under the protection of UNESCO.',
      imageUrl: 'assets/images/cardsimg/berat.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '121',
      destinationName: 'Kruje',
      price: 35,
      shortDescription: 'It offers an open visit to an amazing panoramic view.',
      imageUrl: 'assets/images/cardsimg/kruje.jpg',
      //   // shortDescription: string,
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '122',
      destinationName: 'Pogradec',
      price: 40,
      shortDescription:
        'Tradition in hosting family tourism, and for the pleasant fresh climate.',
      imageUrl: 'assets/images/cardsimg/pogradec.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '123',
      destinationName: 'Butrint',
      price: 90,
      shortDescription: 'The Microcosmos of Mediterranean.',
      imageUrl: 'assets/images/cardsimg/butrint.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '124',
      destinationName: 'Ksamil',
      price: 100,
      shortDescription:
        'The Pearl of Southern Albania, wonderful view and amazing sea.',
      imageUrl: 'assets/images/cardsimg/ksamil.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '125',
      destinationName: 'Tamare',
      price: 60,
      shortDescription: 'Enjoy the picturesque panorama and the fresh food.',
      imageUrl: 'assets/images/cardsimg/tamare.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '126',
      destinationName: 'Drimadhe',
      price: 150,
      shortDescription: 'Sea, nature, typicall village and summer festivals.',
      imageUrl: 'assets/images/cardsimg/drimadhe.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      // itinerary: Array < Itinerary >
    },

    {
      id: '127',
      destinationName: 'Lumi i Shales',
      price: 70,
      shortDescription:
        'Crystal water and magical nature will make you enjoy every second.',
      imageUrl: 'assets/images/cardsimg/lumishales.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '128',
      destinationName: 'Kanionet e Osumit',
      price: 45,
      shortDescription: 'A new experience, with great memories and fun stuff.',
      imageUrl: 'assets/images/cardsimg/kanionetosum.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '129',
      destinationName: 'Jale',
      price: 150,
      shortDescription: 'Sea, nature, typicall village and summer festivals.',
      imageUrl: 'assets/images/cardsimg/jale.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '130',
      destinationName: 'Sazan',
      price: 70,
      shortDescription:
        'One of the hottest summer destinations and most visited one.',
      imageUrl: 'assets/images/cardsimg/sazan.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '131',
      destinationName: 'Lepushe',
      price: 50,
      shortDescription: 'Lookout to find yourself in the middle of nature.',
      imageUrl: 'assets/images/cardsimg/lepushe.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '132',
      destinationName: 'Permet',
      price: 40,
      shortDescription:
        'The greenest town in Albania, also known as the city of roses.',
      imageUrl: 'assets/images/cardsimg/permet.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '133',
      destinationName: 'Vlora',
      price: 70,
      shortDescription:
        'Its shores present a unique mixture of rocky and sand beaches.',
      imageUrl: 'assets/images/cardsimg/vlore.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '134',
      destinationName: 'Durres',
      price: 20,
      shortDescription:
        'The city of ancient archaeological sites and findings.',
      imageUrl: 'assets/images/cardsimg/durres.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '135',
      destinationName: 'Lezhe',
      price: 35,
      shortDescription:
        "It is one of  Albania's ancient cities. The Memorial Grave of Skanderbeg.",
      imageUrl: 'assets/images/cardsimg/lezhe.jpg',
      //   // shortDescription: string,
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '136',
      destinationName: 'Vermosh',
      price: 60,
      shortDescription:
        'A dramatic journey through the spectacular mountainous.',
      imageUrl: 'assets/images/cardsimg/vermosh.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '137',
      destinationName: 'Razem',
      price: 60,
      shortDescription:
        'Offers for you a typical Albanian atmosphere in the heart of the Alps.',
      imageUrl: 'assets/images/cardsimg/razem.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '138',
      destinationName: 'Boge',
      price: 70,
      shortDescription:
        'The presence of the ski resort attracts many visitors.',
      imageUrl: 'assets/images/cardsimg/boge.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '139',
      destinationName: 'Himare',
      price: 110,
      shortDescription:
        'Find the crystal clear, azure water and soft-sanded in Himare Beach.',
      imageUrl: 'assets/images/cardsimg/himare.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },

    {
      id: '140',
      destinationName: 'Brezovice',
      price: 80,
      shortDescription:
        'The presence of the ski resort attracts many visitors.',
      imageUrl: 'assets/images/cardsimg/brezovice.jpg',
      //   // dificulty: string,
      //   // activity: string,
      //   // rating: Array < Rating >,
      //   // location: string,
      //   // mostPopular: boolean,
      //   // upComing: boolean,
      //   // imageCover: string,
      //   // reccomandations: string,
      //   // longDiscription: string,
      //   // itinerary: Array < Itinerary >
    },
  ];

  constructor() {}

  all() {
    // ToDo: get all trips from localStorage

    return this.trips;
  }

  filter(filters: any) {
    return this.trips;
  }

  popular() {
    return this.trips.filter((trip) => trip.mostPopular === true);
  }

  upcoming() {
    return this.trips.filter((trip) => trip.upComing === true);
  }

  find(id: any): Trip {
    return <Trip>this.trips.find((trip) => trip.id == id);
  }

  // create

  // edit

  // delete
}
