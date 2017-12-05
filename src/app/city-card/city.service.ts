import {Injectable, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {City} from './city.types';
import {CityComponent} from './city.component';

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

  getMonthlyConsumption(city, year): any {
    return [
      {data: [44, 55, 65, 59, 80, 81, 56, 55, 60, 56, 60, 80], label: 'Total Consumption'},
      {data: [22, 29, 28, 48, 40, 42, 29, 27, 20, 15, 20, 34], label: 'Solar Consumption'}
    ]
  }
}
