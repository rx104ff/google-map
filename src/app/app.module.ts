import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material'
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {MatCardModule, MatStepperModule, MatSidenavModule, MatButtonModule} from '@angular/material';
import {CityComponent} from './city-card/city.component';
import {CityCardComponent} from './city-card/city-card.component';
import {CityService} from './city-card/city.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    CityComponent,
    CityCardComponent
  ],
  imports: [
    MatToolbarModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: GoogleMapComponent
      }
    ]),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2JICaWUxAtdp9fJTDPp8iWK-Kl13vNzo'
    }),
    AgmSnazzyInfoWindowModule,
    MatCardModule,
    MatStepperModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
