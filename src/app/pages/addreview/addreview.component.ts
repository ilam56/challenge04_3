import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';



import { Review } from '../../types/review';
import { City } from '../../types/city';
import { CityModelService } from '../../services/city-model.service';
import { Business } from '../../types/business';

import { IdServiceService } from '../../services/id-service.service';


@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  rating = null;
  selectForm: FormGroup;
  cityForm: FormGroup;
  businessForm: FormGroup;
  reviewForm: FormGroup;
  selectedValue = "None";
  views = ['City', 'Business', 'Review'];
  cityNames: Array<String>;
  businessViews = [''];
  spamCheck: Boolean;
  selectedRevCity: string;
  reviewData: Review[] = [];
  cityData: City[];
  businessData: Array<Business> = [];

  

  constructor(public fb: FormBuilder, private cityModel: CityModelService, private idModel: IdServiceService, private router: Router) { 
    this.cityData = cityModel.getData();
    this.cityNames = cityModel.getCityNames();
  }
 
  ngOnInit() {
    this.selectForm = this.fb.group({
        selection: ['']
    });
    this.cityForm = this.fb.group({
        cityName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
    this.businessForm = this.fb.group({
        //note reg ex from https://stackoverflow.com/questions/39775023/regex-for-company-name-variations
        businessName: ['', [Validators.required, Validators.pattern("[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?& -]*")]],
        service: ['', Validators.required],
        city: ['', Validators.required]
    });
    this.reviewForm = this.fb.group({
        businessName: ['', Validators.required],
        city: ['', Validators.required],
        authorName: ['', Validators.required],
        rating: ['', Validators.required],
        text: ['', Validators.required]
    });
    this.spamCheck = false;
    //console.log(this.cityModel.getCityNames());
    //localStorage.clear();
  }



  submitCity() {
    if(!this.cityForm.invalid && this.spamCheck == false){
      this.cityData = this.cityModel.addData({
        id: this.idModel.generateId(),
        cityName: this.cityForm.value.cityName,
        businesses: this.businessData
      });
      this.spamCheck = true;
      this.router.navigate(['']);
    } else {
      console.log("invalid form");
      //next 4 lines from https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
        Object.keys(this.cityForm.controls).forEach(field => { 
          const control = this.cityForm.get(field);           
          control.markAsTouched({ onlySelf: true });       
        });
    }
  }

  submitBusiness() {
    if(!this.businessForm.invalid && this.spamCheck == false){
      this.cityData = this.cityModel.addBusData({
        id: this.idModel.generateId(),
        businessName: this.businessForm.value.businessName,
        service: this.businessForm.value.service,
        city: this.cityModel.getCityName(this.businessForm.value.city),
        reviews: this.reviewData
      },this.businessForm.value.city);
      this.spamCheck = true;
      this.router.navigate(['']);
    } else {
      console.log("invalid form");
      //next 4 lines from https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
        Object.keys(this.businessForm.controls).forEach(field => { 
          const control = this.businessForm.get(field);           
          control.markAsTouched({ onlySelf: true });       
        });
    }
  }
  submitReview() {
    if(!this.reviewForm.invalid && this.spamCheck == false){
      this.cityData = this.cityModel.addRevData({
        id: this.idModel.generateId(),
        businessName: this.reviewForm.value.businessName,
        city: this.cityModel.getCityName(this.reviewForm.value.city),
        authorName: this.reviewForm.value.authorName,
        rating: this.reviewForm.value.rating,
        text: this.reviewForm.value.text
      }, this.reviewForm.value.city, this.reviewForm.value.businessName);
      this.spamCheck = true;
      this.router.navigate(['']);
    } else {
      console.log("invalid form");
      //next 4 lines from https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
        Object.keys(this.reviewForm.controls).forEach(field => { 
          const control = this.reviewForm.get(field);           
          control.markAsTouched({ onlySelf: true });       
        });
    }
  }
  selected() {
    this.selectedValue = this.selectForm.value.selection;
  }

  revCity() {
    this.selectedRevCity = this.reviewForm.value.city;
  }
  rated() {
    this.rating = this.reviewForm.value.rating;
  }

  getCity(id: string): City {
    return this.cityModel.getCity(id);
  }

  get buscity() { return this.businessForm.get('city'); }
  get busname() { return this.businessForm.get('businessName'); }
  get busserv() { return this.businessForm.get('service'); }
  get cityname() { return this.cityForm.get('cityName'); }
  get revcity() { return this.reviewForm.get('city'); }
  get revname() { return this.reviewForm.get('businessName'); }
  get revauth() { return this.reviewForm.get('authorName'); }
  get revtext() { return this.reviewForm.get('text'); }
  get revrating() { return this.reviewForm.get('rating'); }
}