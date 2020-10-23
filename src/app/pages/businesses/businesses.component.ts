import { Component, OnInit } from '@angular/core';
import { City } from '../../types/city';
import { CityModelService } from '../../services/city-model.service';
import { Business } from '../../types/business';
import { BusinessModelService } from '../../services/business-model.service';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
  businessData: Array<Business>;
  avgReview: number;
  cityName: string
  id: string;
  private sub: any;

  constructor(private cityModel: CityModelService, private route: ActivatedRoute) {
    route.queryParams.subscribe( params => {
      this.id = params['id'];
    })
  
    this.businessData = cityModel.getCityBusinesses(this.id);
    this.cityName = cityModel.getCityName(this.id);
  }

  getAverage(bus: Business){
    if(bus.reviews.length > 0){
      var total = 0;
      var x;
      for(x of bus.reviews){
        total += x.rating;
      }
      return total/bus.reviews.length;
    } else {
      return 0;
    }
  }
  
  ngOnInit() {
    console.log(this.businessData);
  }

}