import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';


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
  selectedValue = "None";
  views = ['Select One', 'City', 'Business', 'Review'];

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
        city: ['', Validators.required],
        authorName: ['', Validators.required],
        rating: ['', Validators.required],
        text: ['', Validators.required],
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

  selected() {
    this.selectedValue = this.selectForm.value.selection;
  }
  rated() {
    this.rating = this.businessForm.value.rating;
  }
}