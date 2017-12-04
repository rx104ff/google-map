import {Component, Input, OnInit} from '@angular/core';
import {CityService} from './city.service';
import {City} from './city.types';

@Component({
  selector: 'se-map-city',
  templateUrl: 'city.component.html'
})

export class CityComponent implements OnInit {
  @Input() cityName: string;
  @Input() show: boolean;

  city = new City();

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    console.log('City view has been initiated');
    this.city = this.cityService.getCityByName(this.cityName);
  }
}
