import { Injectable } from '@angular/core';
import { Review } from '../types/review'

import reviews from '../../assets/reviews.json';


@Injectable()
export class ReviewModelService {
  data: Array<Review> = reviews;

  constructor() { 
      this.data =
      localStorage.getItem('reviews') !== null
        ? JSON.parse(localStorage.getItem('reviews'))
        : reviews;
  
  }

  addData(formObject: Review) {
    this.data =
      localStorage.getItem('reviews') !== null
        ? JSON.parse(localStorage.getItem('reviews'))
        : reviews;

    this.data.push(formObject);

    localStorage.setItem('reviews', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }

  getData() {
    this.data =
      localStorage.getItem('reviews') !== null
        ? JSON.parse(localStorage.getItem('reviews'))
        : reviews;

    return this.data;
  }

}