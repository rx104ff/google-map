import {TestBed, async, ComponentFixture, inject, fakeAsync} from '@angular/core/testing'

import {SharedModule} from '../shared/shared.module';
import {MainComponent} from '../layout/main/main.component';
import {NavbarComponent} from '../layout/navbar/navbar.component';
import {City} from './city.types';
import {GoogleMapComponent} from '../google-map/google-map.component';
import {APP_BASE_HREF} from '@angular/common'
import {CityService} from './city.service';
import {CityComponent} from './city.component';
import {CityCardComponent} from './city-card.component';
import {ChartsModule} from 'ng2-charts';

describe('CityComponent', () => {
  let fixture: ComponentFixture<CityComponent>;
  let comp: CityComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ChartsModule],
      declarations: [
        GoogleMapComponent,
        CityComponent,
        MainComponent,
        NavbarComponent,
        CityCardComponent
      ],
      providers: [CityService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents().then(() => {

      fixture = TestBed.createComponent(CityComponent);
      comp = fixture.componentInstance;
      comp.cityName = 'Singapore';
    });
  }));

  it('should load the city card', inject([CityService],
    fakeAsync((cityService: CityService) => {
      const expectedCity = new City();
      expectedCity.name = 'Singapore';
      expectedCity.solarPercentage = 0.5;
      expectedCity.generation = 10000;
      expectedCity.consumption = 30000;
      const expectedData = [
        {data: [44, 55, 65, 59, 80, 81, 56, 55, 60, 56, 60, 80], label: 'Total Consumption'},
        {data: [22, 29, 28, 48, 40, 42, 29, 27, 20, 15, 20, 34], label: 'Solar Consumption'}
      ];
      spyOn(cityService, 'getCityByName').and.returnValue(expectedCity);
      spyOn(cityService, 'getMonthlyConsumption').and.returnValue(expectedData);

      comp.ngOnInit();

      expect(cityService.getCityByName).toHaveBeenCalledWith(expectedCity.name);
      expect(cityService.getMonthlyConsumption).toHaveBeenCalledWith(expectedCity.name, 2017);
      expect(comp.city.name).toMatch(expectedCity.name);
      expect(comp.city.solarPercentage).toEqual(expectedCity.solarPercentage);
      expect(comp.city.generation).toEqual(expectedCity.generation);
      expect(comp.city.consumption).toEqual(expectedCity.consumption);
      expect(comp.lineChartData).toEqual(expectedData);
    })
  ));

  it('should emit the event', () => {
    comp.chartTypeToggle();

    expect(comp.lineChartType).toMatch('bar')
  })
});
