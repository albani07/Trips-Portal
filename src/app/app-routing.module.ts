import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ExampleComponent } from './example/example.component';
import { TripsComponent } from './pages/trips/trips.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { JoinOurTeamComponent } from './pages/auth/join-our-team/join-our-team.component';
import { SingleTripComponent } from './trips/single-trip/single-trip.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },
  // { path: '', component: HomeContentComponent },
  // { path: 'example', component: ExampleComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'join-our-team', component: JoinOurTeamComponent },
  { path: 'trips/:id', component: SingleTripComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
