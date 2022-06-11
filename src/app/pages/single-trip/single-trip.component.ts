import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss'],
})
export class SingleTripComponent implements OnInit {
  @Input() trip!: Trip;

  alert() {
    window.alert('Submitted succesfully!');
  }

  public tripId: number | undefined;
  public tripDestination: number | undefined;
  public tripPrice: number | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.tripId = id;

    let destination = parseInt(
      this.route.snapshot.paramMap.get('destinationName') || '{}'
    );
    this.tripDestination = destination;

    // let price = parseInt(this.route.snapshot.paramMap.get('price') || '{}');
    // this.tripPrice = price;
  }
}
