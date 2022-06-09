import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../../interfaces/trip';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {
  onClick(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
  }

  @Input() trip!: Trip;

  constructor() { }

  ngOnInit(): void {
  }

}
