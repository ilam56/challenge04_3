import { Component, OnInit } from '@angular/core';
import { CityModelService } from '../../services/city-model.service';
import { Business } from '../../types/business';
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

  constructor(private cityModel: CityModelService, private route: ActivatedRoute) {
    route.params.subscribe( params => {
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
      var num = total/bus.reviews.length;
      return Math.round((num + Number.EPSILON) * 100) / 100
    } else {
      return 0;
    }
  }
  
  ngOnInit() {
    //console.log(this.businessData);
  }

}