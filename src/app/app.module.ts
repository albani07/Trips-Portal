import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TripsComponent } from './trips/trips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JoinOurTeamComponent } from './join-our-team/join-our-team.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleTripComponent } from './trips/single-trip/single-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeContentComponent,
    TripsComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    JoinOurTeamComponent,
    SingleTripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
