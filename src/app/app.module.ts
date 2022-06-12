import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

// import { ExampleComponent } from './example/example.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { TripsComponent } from './pages/trips/trips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
// import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { JoinOurTeamComponent } from './pages/join-our-team/join-our-team.component';
import { TripCardComponent } from './shared/cards/trip-card/trip-card.component';
import { SingleTripComponent } from './pages/single-trip/single-trip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    // ExampleComponent,
    HomeContentComponent,
    TripsComponent,
    ContactComponent,
    NavbarComponent,
    // HomeComponent,
    LoginComponent,
    SignupComponent,
    JoinOurTeamComponent,
    TripCardComponent,
    SingleTripComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
