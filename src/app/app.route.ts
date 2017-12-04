import {Routes} from '@angular/router'
import {GoogleMapComponent} from './google-map/google-map.component';
import {CityComponent} from './city-card/city.component';
import {NavbarComponent} from './layout/navbar/navbar.component';

export const route: Routes = [
  {
    path: '/dashboard',
    component: GoogleMapComponent,
    outlet: 'se-google-map',
  },
  {
    path: '/city/singapore',
    component: CityComponent,
    outlet: 'se-map-city',
  },
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar'
  }];
