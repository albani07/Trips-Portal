import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss'],
})
export class SingleTripComponent implements OnInit {
  @Input() trip!: Trip;

  constructor() {
    // this.imagePath1 = '../../assets/images/single-trip-pictures/theth1.jpg';
    // this.imagePath2 = '../../assets/images/single-trip-pictures/theth2.jpg';
    // this.imagePath3 = '../../assets/images/single-trip-pictures/theth3.jpg';
    // this.imagePath4 = '../../assets/images/single-trip-pictures/theth4.jpg';
    // this.locationIcon = '../../assets/images/single-trip-pictures/location.png';
    // // this.oiaImg = '../../assets/images/oia.jpg';
    // // this.quadImg = '../../assets/images/fira.jpg';
  }
  ngOnInit(): void {}
}
