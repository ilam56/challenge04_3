import { Injectable } from '@angular/core';
import { Review } from '../types/review'

import reviews from '../../assets/reviews.json';

import { City } from '../types/city'

import cities from '../../assets/cities.json';

@Injectable()
export class ReviewModelService {
  data: Array<City> = cities;

  constructor() { 
      this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;
  
  }

  addData(formObject: Review) {
    this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;
    
    var x;
    var count1 = 0;
    var count2 = 0;
    var k;
    for (x in this.data) {
      if (x.cityName === formObject.city){
        for(k in x.businesses){
          if(k.businessName === formObject.businessName){
            break;
          }
          count2 += 1;
        }
        break;
      } 
      count1 += 1;
    }
    this.data[count1][count2].reviews.push(formObject);

    localStorage.setItem('cites', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }

  getData() {
    this.data =
      localStorage.getItem('cites') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : reviews;

    return this.data;
  }

}