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
import {SharedModule} from './shared/shared.module';
import {MainComponent} from './layout/main/main.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {GoogleMapService} from './google-map/google-map.service';

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
   SharedModule
  ],
  providers: [CityService, GoogleMapService],
  bootstrap: [MainComponent]
})
export class AppModule {
}
