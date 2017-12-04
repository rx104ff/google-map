import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {
  MatToolbarModule, MatCardModule, MatStepperModule,
  MatSidenavModule,
  MatButtonModule
} from '@angular/material';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {AgmCoreModule} from '@agm/core';
import {RouterModule} from '@angular/router'
import {BrowserModule} from '@angular/platform-browser/';
import {SharedModule} from '../shared/shared.module';
import {GoogleMapComponent} from './google-map.component';
import {GoogleMapService} from './google-map.service';

describe('GoogleComponent', () => {
  let fixture: ComponentFixture<GoogleMapComponent>;
  let comp: GoogleMapComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        GoogleMapComponent
      ],
      providers: [GoogleMapService]
    }).compileComponents().then(() => {

      fixture = TestBed.createComponent(GoogleMapComponent);
      comp = fixture.componentInstance;
    });
  }));
  it('should load the component', () => {
  })
});
