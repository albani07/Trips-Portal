import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TripsComponent } from './trips/trips.component';
import { JoinOurTeamComponent } from './join-our-team/join-our-team.component';
import { SingleTripThethComponent } from './trips/single-trip-theth/single-trip-theth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeContentComponent,
    TripsComponent,
    JoinOurTeamComponent,
    SingleTripThethComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
