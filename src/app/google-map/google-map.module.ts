import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GoogleMapService} from './google-map.service';
import {CityComponent} from '../city-card/city.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [GoogleMapService],
  declarations: [],
  bootstrap: [],
  entryComponents: []
})
export class GoogleMapModule {
}
