import { Injectable } from '@angular/core';
import { City } from '../types/city'

import { Review } from '../types/review'

import cities from '../../assets/cities.json';
import { Business } from '../types/business';

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
    this.data = this.getData();

    this.data.push(formObject);

    localStorage.setItem('cities', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }

  getCityNames() {
    this.data = this.getData();
    var names: Array<string> = [];
    var x;
    for (x of this.data){
      names.push(x.cityName);
    }
    return names;
  }

  getCityBusinesses(id: string){
    this.data = this.getData();
    var x;
    for (x of this.data){
      if (x.id === id){
        return x.businesses;
      }
    }
  }

  getReviews(cityId: string, busId: string){
    var bus: Array<Business> = this.getCityBusinesses(cityId);
    var x;
    for (x of bus){
      if (x.id === busId){
        return x.reviews;
      }
    }
  }

  getBusinessName(cityId: string, busId: string){
    var bus: Array<Business> = this.getCityBusinesses(cityId);
    var x;
    for (x of bus){
      if (x.id === busId){
        return x.businessName;
      }
    }
  }

  getTotalBusinesses(){
    this.data = this.getData();
    var x;
    var count = 0;
    for(x of this.data){
      count+= x.businesses.length
    }
    return count;
  }

  getCityName(id: string){
    this.data = this.getData();
    var x;
    for (x of this.data){
      if (x.id === id){
        return x.cityName;
      }
    }
  }

  getData(): City[] {
    this.data =
      localStorage.getItem('cities') !== null
        ? JSON.parse(localStorage.getItem('cities'))
        : cities;

    return this.data;
  }
}