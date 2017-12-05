import {TestBed, async, ComponentFixture} from '@angular/core/testing'

import {SharedModule} from '../shared/shared.module';
import {MainComponent} from '../layout/main/main.component';
import {NavbarComponent} from '../layout/navbar/navbar.component';
import {CityCardComponent} from './city-card.component';
import {City} from './city.types';
import {GoogleMapComponent} from '../google-map/google-map.component';
import {APP_BASE_HREF} from '@angular/common'
import {CityService} from './city.service';

describe('CityCardComponent', () => {
  let fixture: ComponentFixture<CityCardComponent>;
  let comp: CityCardComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        GoogleMapComponent,
        CityCardComponent,
        MainComponent,
        NavbarComponent
      ],
      providers: [CityService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents().then(() => {

      fixture = TestBed.createComponent(CityCardComponent);
      comp = fixture.componentInstance;
    });
  }));
  it('should load the city card', () => {
    const expectedCityName = 'Singapore';
    const expectedLat = 10;
    const expectedLng = 10;
    comp.cityName = expectedCityName;
    comp.lat = expectedLat;
    comp.lng = expectedLng;

    comp.ngOnInit();

    expect(comp.city.name).toEqual(expectedCityName);
    expect(comp.city.lng).toEqual(expectedLng);
    expect(comp.city.lat).toEqual(expectedLat)
  });

  it('should emit the event', () => {
    comp.city = new City('Singapore', 10, 10);
    spyOn(comp.cityDetail, 'emit');

    comp.zoomIn();

    expect(comp.cityDetail.emit).toHaveBeenCalled()
  })
});
