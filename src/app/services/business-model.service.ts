import { Injectable } from '@angular/core';
import { Business } from '../types/business'

import businesses from '../../assets/businesses.json';
import { City } from '../types/city'

import cities from '../../assets/cities.json';



@Injectable()
export class BusinessModelService {

  data: Array<City> = cities;

  constructor() { 
      this.data =
      localStorage.getItem('businesses') !== null
        ? JSON.parse(localStorage.getItem('businesses'))
        : businesses;
  
  }

  addData(formObject: Business) {
    this.data =
      localStorage.getItem('businesses') !== null
        ? JSON.parse(localStorage.getItem('businesses'))
        : businesses;
    var x;
    var count1 = 0;
    for (x in this.data) {
      if (x.cityName === formObject.city){
        break;
      } 
      count1 += 1;
    }
    this.data[count1].businesses.push(formObject);

    localStorage.setItem('businesses', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }

  getData() {
    this.data =
      localStorage.getItem('businesses') !== null
        ? JSON.parse(localStorage.getItem('businesses'))
        : businesses;

    return this.data;
  }

}