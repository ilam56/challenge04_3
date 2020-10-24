import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './pages/cities/cities.component';
import { BusinessesComponent } from './pages/businesses/businesses.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { AddreviewComponent } from './pages/addreview/addreview.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


const routes: Routes = [
  { path: '', component: CitiesComponent},
  { path: 'cities', component: CitiesComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'businesses', component: BusinessesComponent},
  { path: 'addreview', component: AddreviewComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
