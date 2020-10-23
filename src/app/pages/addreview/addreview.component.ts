import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { Observable } from 'rxjs';


import { Review } from '../../types/review';
import { ReviewModelService } from '../../services/review-model.service';
import { City } from '../../types/city';
import { CityModelService } from '../../services/city-model.service';
import { Business } from '../../types/business';
import { BusinessModelService } from '../../services/business-model.service';

import { IdServiceService } from '../../services/id-service.service';

import cities from '../../../assets/cities.json';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  rating = 5.0;
  selectForm: FormGroup;
  cityForm: FormGroup;
  businessForm: FormGroup;
  reviewForm: FormGroup;
  selectedValue = "None";
  views = ['City', 'Business', 'Review'];
  cityNames: Array<String>;
  businessViews = [''];
  spamCheck: Boolean;

  reviewData: Review[] = [];
  cityData: City[];
  businessData: Array<Business> = [];

  

  constructor(public fb: FormBuilder, private reviewModel: ReviewModelService, private cityModel: CityModelService, private businessModel: BusinessModelService, private idModel: IdServiceService, private router: Router) { 
    this.cityData = cityModel.getData();
    this.cityNames = cityModel.getCityNames();
  }
 
  ngOnInit() {
    this.selectForm = this.fb.group({
        selection: ['']
    });
    this.cityForm = this.fb.group({
        cityName: ['', Validators.required]
    });
    this.businessForm = this.fb.group({
        businessName: ['', Validators.required],
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
      //next 4 lines from https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
        Object.keys(this.cityForm.controls).forEach(field => { 
          const control = this.cityForm.get(field);           
          control.markAsTouched({ onlySelf: true });       
        });
    }
  }

  submitBusiness() {
    if(!this.businessForm.invalid){
      this.cityData = this.businessModel.addData({
        id: this.idModel.generateId(),
        businessName: this.businessForm.value.businessName,
        service: this.businessForm.value.service,
        city: this.businessForm.value.city,
        reviews: this.reviewData
      });
      this.spamCheck = true;
      this.router.navigate(['']);
    } else {
      //next 4 lines from https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
        Object.keys(this.businessForm.controls).forEach(field => { 
          const control = this.businessForm.get(field);           
          control.markAsTouched({ onlySelf: true });       
        });
    }
  }
  submitReview() {
    if(!this.reviewForm.invalid){
      this.cityData = this.reviewModel.addData({
        id: this.idModel.generateId(),
        businessName: this.reviewForm.value.businessName,
        city: this.reviewForm.value.city,
        authorName: this.reviewForm.value.authorName,
        rating: this.reviewForm.value.rating,
        text: this.reviewForm.value.text
      });
      this.spamCheck = true;
      this.router.navigate(['']);
    } else {
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
  rated() {
    this.rating = this.reviewForm.value.rating;
  }

  get buscity() { return this.businessForm.get('city'); }
  get busname() { return this.businessForm.get('businessName'); }
  get busserv() { return this.businessForm.get('service'); }
  get cityname() { return this.cityForm.get('cityName'); }
}