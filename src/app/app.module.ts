
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CitiesComponent } from './pages/cities/cities.component'
import { BusinessesComponent } from './pages/businesses/businesses.component'
import { ReviewsComponent } from './pages/reviews/reviews.component'
import { AddreviewComponent } from './pages/addreview/addreview.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    BusinessesComponent,
    ReviewsComponent,
    AddreviewComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
