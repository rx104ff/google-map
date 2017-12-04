import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {City} from './city.types';
import {CityService} from './city.service';

@Component({
  selector: 'se-city-card',
  templateUrl: 'city-card.component.html'
})

export class CityCardComponent implements OnInit {
  @Input() cityName: string;
  @Output()
  cityDetail = new EventEmitter<string>();
  city = new City();
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.city.name = this.cityName;
    this.city = this.cityService.getCityByName(this.cityName)
  }

  zoomIn() {
    this.cityDetail.emit(this.cityName)
  }
}
