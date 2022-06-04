import { Component, OnInit } from '@angular/core';
import { Trips } from '../shared/trips';
import { TripsService } from './trips.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  public trips: Trips[]=[]

  constructor(private tripsService: TripsService, private router: Router) { }

  ngOnInit(): void {
    this.loadTrips()
  }

  private loadTrips(): void{
    this.tripsService.getTrips().subscribe((trips:Trips[])=>this.trips=trips)
  }

  onSelect(id: any){ 
    this.router.navigate(['/trips', id])
  }

}
