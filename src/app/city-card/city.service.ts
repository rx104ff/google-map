import {Injectable} from '@angular/core';
import {City} from './city.types';

@Injectable()
export class CityService {
  private city = new City();

  // TODO with backend
  getCityByName(name) {
    this.city.name = name;
    this.city.consumption = 100000;
    this.city.generation = 5000;
    this.city.solarPercentage = 50;
    return this.city
  }
}
