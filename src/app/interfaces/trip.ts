import { Itinerary } from './itenerary';

export interface Trip {
  id: string;
  destinationName: string;
  price: number;
  imageUrl?: string;
  shortDescription?: string;
  difficulty?: string,
  activity?: string;
  // rating: Array<Rating>,
  // location: string,
  mostPopular?: boolean;
  upComing?: boolean;
  // imageCover: string,
  // reccomandations: string,
  longDescription1?: string;
  longDescription2?: string;
  itinerary?: Array<Itinerary>;
  img1?: string;
  img2?: string;
  img3?: string;
}

// export interface APIResponese {
//     results: Array<T>;
// }

interface Rating {
  id: string;
  count: number;
  title: string;
}
