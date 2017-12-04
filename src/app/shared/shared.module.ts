import {BrowserModule} from '@angular/platform-browser';

import {GoogleMapComponent} from '../google-map/google-map.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';

import {RouterModule} from '@angular/router';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2JICaWUxAtdp9fJTDPp8iWK-Kl13vNzo'
    }),
    AgmSnazzyInfoWindowModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: GoogleMapComponent
      }
    ]),
  ],
  declarations: [],
  providers: [],
  exports: [
    MaterialModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule {
}
