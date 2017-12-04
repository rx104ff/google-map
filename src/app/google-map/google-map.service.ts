import {Injectable} from '@angular/core'
import {CityCode} from './google-map.types';

declare const google: any;

@Injectable()
export class GoogleMapService {
  getCityCode(cityName) {
    const cityCode = new CityCode(null, null);
    const geoCoder = new google.maps.Geocoder();
    geoCoder.geocode({
      'address': cityName
    }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        cityCode.lat = results[0].geometry.location.lat();
        cityCode.lng = results[0].geometry.location.lng();
        const myOptions = {
          zoom: 11,
          center: new google.maps.LatLng(cityCode,
            cityCode)
        };
        const map = new google.maps.Map(
          document.getElementById('test'), myOptions);
      } else {
        alert('Something got wrong' + status);
      }
    });
    return cityCode
  }
}
