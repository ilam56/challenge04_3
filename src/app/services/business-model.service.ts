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
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;
  
  }

  addData(formObject: Business) {
    this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;
    var x;
    var count1 = 0;
    for (x of this.data) {
      if (x.cityName === formObject.city){
        break;
      } 
      count1 += 1;
    }
    this.data[count1].businesses.push(formObject);

    localStorage.setItem('cities', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }
  getBusiness(id: string){
    this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;
    var x;
    for (x of this.data){
      if (x.id === id){
        return x.businesses;
      }
    }
  }
  getData() {
    this.data =
      localStorage.getItem('businesses') !== null
        ? JSON.parse(localStorage.getItem('businesses'))
        : businesses;

    return this.data;
  }

}