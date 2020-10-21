import { Injectable } from '@angular/core';
import { City } from '../types/city'

import cities from '../../assets/cities.json';

@Injectable()
export class CityModelService {
  data: Array<City> = cities;

  constructor() { 
      this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;
  
  }

  addData(formObject: City) {
    this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;

    this.data.push(formObject);

    localStorage.setItem('cities', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }

  getData() {
    this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;

    return this.data;
  }
}