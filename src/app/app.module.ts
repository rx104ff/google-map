import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {CityComponent} from './city-card/city.component';
import {CityCardComponent} from './city-card/city-card.component';
import {CityService} from './city-card/city.service';
import {SharedModule} from './shared/shared.module';
import {MainComponent} from './layout/main/main.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {GoogleMapService} from './google-map/google-map.service';
import {ChartsModule} from 'ng2-charts';
import {CityDynamicService} from './city-card/city-dynamic.service';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    CityComponent,
    CityCardComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    ChartsModule,
    RouterModule
  ],
  providers: [CityService, GoogleMapService, CityDynamicService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [MainComponent],
  entryComponents: [CityComponent]
})
export class AppModule {
}
