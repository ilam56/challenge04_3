import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { Review } from '../../types/review'

import reviews from '../../../assets/reviews.json';


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

  reviewData: Array<Review> = reviews;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.selectForm = this.fb.group({
        selection: ['']
    });
    this.cityForm = this.fb.group({
        cityName: ['', Validators.required]
    });
    this.businessForm = this.fb.group({
        businessName: ['', Validators.required],
        city: ['', Validators.required]
    });
    this.reviewForm = this.fb.group({
        businessName: ['', Validators.required],
        city: ['', Validators.required],
        authorName: ['', Validators.required],
        rating: ['', Validators.required],
        text: ['', Validators.required]
    });
  }




  submitForm(form: FormGroup) {
    console.log(this.selectForm.value);
  }

  submitCity() {
    console.log(this.cityForm.value);
  }
  submitBusiness() {
    console.log(this.businessForm.value);
  }
  submitReview() {
    this.reviewData.push({
      businessName: this.reviewForm.value.businessName,
      city: this.reviewForm.value.city,
      authorName: this.reviewForm.value.authorName,
      rating: this.reviewForm.value.rating,
      text: this.reviewForm.value.text
    });
  }
  selected() {
    this.selectedValue = this.selectForm.value.selection;
  }
  rated() {
    this.rating = this.reviewForm.value.rating;
  }

  get buscity() { return this.businessForm.get('city'); }
}