import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss'],
})
export class SingleTripComponent implements OnInit {
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
  imagePath4: string;
  locationIcon: string;
  // oiaImg: string;
  // quadImg: string;
  currentRate = 9.6;
  public isCollapsed = true;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`); //in cases of having a Database where all the images are stored
  constructor() {
    this.imagePath1 = '../../assets/images/single-trip-pictures/theth1.jpg';
    this.imagePath2 = '../../assets/images/single-trip-pictures/theth2.jpg';
    this.imagePath3 = '../../assets/images/single-trip-pictures/theth3.jpg';
    this.imagePath4 = '../../assets/images/single-trip-pictures/theth4.jpg';
    this.locationIcon = '../../assets/images/single-trip-pictures/location.png';
    // this.oiaImg = '../../assets/images/oia.jpg';
    // this.quadImg = '../../assets/images/fira.jpg';
  }
  ngOnInit(): void { }
}
