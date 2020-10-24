import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CityModelService } from '../../services/city-model.service';
import { Review } from '../../types/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviewData: Array<Review>;
  cityId: string;
  busId: string;
  businessName: string;

  constructor(private cityModel: CityModelService, private route: ActivatedRoute) { 
      route.params.subscribe( params => {
      this.cityId = params['cityId'];
      this.busId = params['busId'];
    })
    this.reviewData = cityModel.getReviews(this.cityId,this.busId);
    this.businessName = cityModel.getBusinessName(this.cityId,this.busId);
  }

  ngOnInit() {
  }

}