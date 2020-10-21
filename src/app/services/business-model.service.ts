import { Injectable } from '@angular/core';
import { Business } from '../types/business'

import businesses from '../../assets/businesses.json';


@Injectable()
export class BusinessModelService {

  data: Array<Business> = businesses;

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

    this.data.push(formObject);

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