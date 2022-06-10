export interface Trip {
    id: string,
    destinationName: string,
    price: number,
    imageUrl: string,
    // shortDescription: string,
    dificulty: string,
    activity: string,
    // rating: Array<Rating>,
    // location: string,
    mostPopular: boolean,
    upComing: boolean,
    // imageCover: string,
    // reccomandations: string,
    // longDiscription: string,
    // itinerary: Array<Itinerary>,
}

// export interface APIResponese {
//     results: Array<T>;
// }

interface Rating {
    id: string,
    count: number,
    title: string,

}

interface Itinerary {
    dayOne: string,
    dayTwo: string,
    dayThree: string,
    dayFour: string,
}