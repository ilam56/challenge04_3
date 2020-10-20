import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CitiesComponent } from './pages/cities/cities.component'
import { BusinessesComponent } from './pages/businesses/businesses.component'
import { ReviewsComponent } from './pages/reviews/reviews.component'
import { AddreviewComponent } from './pages/addreview/addreview.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 404Component } from './404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    BusinessesComponent,
    ReviewsComponent,
    AddreviewComponent,
    404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
