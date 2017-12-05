import {TestBed, async, ComponentFixture, fakeAsync, inject} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser/';
import {SharedModule} from '../shared/shared.module';
import {GoogleMapComponent} from './google-map.component';
import {GoogleMapService} from './google-map.service';
import {CityDynamicService} from '../city-card/city-dynamic.service';
import {City} from '../city-card/city.types';
import {CityComponent} from '../city-card/city.component';
import {CityCardComponent} from '../city-card/city-card.component';
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from '../app.component';
import {MainComponent} from '../layout/main/main.component';
import {NavbarComponent} from '../layout/navbar/navbar.component';
import {APP_BASE_HREF} from '@angular/common';
import {CityService} from '../city-card/city.service';

fdescribe('GoogleComponent', () => {
  let fixture: ComponentFixture<GoogleMapComponent>;
  let comp: GoogleMapComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ChartsModule],
      declarations: [
        AppComponent,
        GoogleMapComponent,
        CityComponent,
        CityCardComponent,
        MainComponent,
        NavbarComponent
      ],
      providers: [GoogleMapService, CityDynamicService, CityService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents().then(() => {

      fixture = TestBed.createComponent(GoogleMapComponent);
      comp = fixture.componentInstance;
    });
  }));
  it('should load the map', () => {
    comp.ngOnInit();

    expect(comp.lng).toEqual(0);
    expect(comp.lat).toEqual(0);
    expect(comp.zoom).toEqual(2)
  });

  it('should add city detail child card',
    inject([CityDynamicService],
      fakeAsync((cityDynamicService: CityDynamicService) => {
        const city = new City('Singapore', 0, 0);
        spyOn(cityDynamicService, 'setRootViewContainerRef');
        spyOn(cityDynamicService, 'addDynamicCharts');
        spyOn(comp, 'selectFacility');

        comp.zoomIn(city);

        expect(cityDynamicService.setRootViewContainerRef).toHaveBeenCalled();
        expect(cityDynamicService.addDynamicCharts).toHaveBeenCalledWith(city.name);
        expect(comp.selectFacility).toHaveBeenCalledWith(0)
      })
    )
  );

  it('should re-center the map',
    inject([CityDynamicService],
      fakeAsync((cityDynamicService: CityDynamicService) => {
        spyOn(cityDynamicService, 'clear');
        comp.lng = 99;
        comp.lat = 99;
        comp.zoom = 10;

        comp.reCenter();

        expect(cityDynamicService.clear).toHaveBeenCalled();
        expect(comp.lng).toEqual(0);
        expect(comp.lat).toEqual(0);
        expect(comp.zoom).toEqual(2)
      })
    )
  );
});
