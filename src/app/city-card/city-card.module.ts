import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CityService} from './city.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  declarations: [],
  bootstrap: []
})

export class CityCardModule {
}
