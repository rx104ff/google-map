import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {City} from './city.types';
import {CityService} from './city.service';

@Component({
  selector: 'se-city-card',
  templateUrl: 'city-card.component.html'
})

export class CityCardComponent implements OnInit {
  @Input() cityName: string;
  @Input() lat: number;
  @Input() lng: number;
  @Output()
  cityDetail = new EventEmitter<City>();
  city = new City();

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.city.name = this.cityName;
    this.city.lat = this.lat;
    this.city.lng = this.lng;
  }

  zoomIn() {
    this.cityDetail.emit(this.city)
  }
}
