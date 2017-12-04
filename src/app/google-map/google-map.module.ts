import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapComponent} from './google-map.component';
import {NguiMapModule} from '@ngui/map';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  declarations: [],
  bootstrap: []
})
export class GoogleMapModule {
}