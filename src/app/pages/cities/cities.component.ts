import { Component, OnInit } from '@angular/core';
import { City } from '../../types/city';
import { CityModelService } from '../../services/city-model.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cityData: Array<City>;
  totalBusinesses: number;

  constructor(private cityModel: CityModelService) {
    this.cityData = cityModel.getData();
    this.totalBusinesses = cityModel.getTotalBusinesses();
    //localStorage.clear();
  }

  ngOnInit() {
    localStorage.clear();
  }

}