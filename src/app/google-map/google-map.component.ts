///<reference path="../../../node_modules/@agm/snazzy-info-window/directives/snazzy-info-window.d.ts"/>
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {AgmSnazzyInfoWindow} from '@agm/snazzy-info-window';
import {CityService} from '../city-card/city.service';
import {GoogleMapService} from './google-map.service';
import {CityDynamicService} from '../city-card/city-dynamic.service';

@Component
({
  selector: 'se-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit{
  @ViewChildren(AgmSnazzyInfoWindow) agmSnazzyInforWindow: QueryList<AgmSnazzyInfoWindow>;
  @ViewChild('cityContainer', {read: ViewContainerRef}) cityContainerRef: ViewContainerRef;

  styles = [{
    'featureType': 'all',
    'elementType': 'geometry.fill',
    'stylers': [{'weight': '2.00'}]
  }, {
    'featureType': 'all',
    'elementType': 'geometry.stroke',
    'stylers': [{'color': '#9c9c9c'}]
  }, {
    'featureType': 'all',
    'elementType': 'labels.text',
    'stylers': [{'visibility': 'on'}]
  }, {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{'color': '#f2f2f2'}]
  }, {
    'featureType': 'landscape',
    'elementType': 'geometry.fill',
    'stylers': [{'color': '#ffffff'}]
  }, {
    'featureType': 'landscape.man_made',
    'elementType': 'geometry.fill',
    'stylers': [{'color': '#ffffff'}]
  }, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [{'visibility': 'off'}]
  }, {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [{'saturation': -100}, {'lightness': 45}]
  }, {
    'featureType': 'road',
    'elementType': 'geometry.fill',
    'stylers': [{'color': '#eeeeee'}]
  }, {
    'featureType': 'road',
    'elementType': 'labels.text.fill',
    'stylers': [{'color': '#7b7b7b'}]
  }, {
    'featureType': 'road',
    'elementType': 'labels.text.stroke',
    'stylers': [{'color': '#ffffff'}]
  }, {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [{'visibility': 'simplified'}]
  }, {
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [{'visibility': 'off'}]
  }, {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [{'visibility': 'off'}]
  }, {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [{'color': '#46bcec'}, {'visibility': 'on'}]
  }, {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [{'color': '#c8d7d4'}]
  }, {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [{'color': '#070707'}]
  }, {'featureType': 'water', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]}];

  lat: number; lng: number; zoom: number;
  cities: City[] = [
    {
      lat: 1.290270,
      lng: 103.851959,
      label: 'Singapore',
      draggable: false
    },
  ];

  constructor(private cityService: CityService,
              private googleMapService: GoogleMapService,
              private cityDynamicService: CityDynamicService) {
  }

  ngOnInit() {
    this.lat = 0; this.lng = 0; this.zoom = 2;
    console.log('Map is successfully loaded');
  }

  zoomIn(city) {
    this.lat = city.lat;
    this.lng = city.lng;
    this.zoom = 11;
    this.cityDynamicService.setRootViewContainerRef(this.cityContainerRef);
    this.cityDynamicService.addDynamicCharts(city.name);
    this.selectFacility(0)
  };

  reCenter() {
    this.lat = 0;
    this.lng = 0;
    this.zoom = 2;
    this.cityDynamicService.clear();
  }

  selectFacility(marker_index) {
    const livewindow = this.agmSnazzyInforWindow.find((window, i) => {
      return i === marker_index
    });
    // livewindow._closeInfoWindow();
  }
}

interface City {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean
}
