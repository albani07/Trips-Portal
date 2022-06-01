import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TripsComponent } from './trips/trips.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { JoinOurTeamComponent } from './join-our-team/join-our-team.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'join-our-team', component: JoinOurTeamComponent }

  // { path: 'trips/:id', component: SingleTripComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
