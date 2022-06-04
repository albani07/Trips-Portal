import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TripsComponent } from './trips/trips.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JoinOurTeamComponent } from './join-our-team/join-our-team.component';
import { SingleTripThethComponent } from './trips/single-trip-theth/single-trip-theth.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomeContentComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'join-our-team', component: JoinOurTeamComponent },
  { path: 'trips/single-trip-theth', component: SingleTripThethComponent },

  // { path: 'trips/:id', component: SingleTripComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
