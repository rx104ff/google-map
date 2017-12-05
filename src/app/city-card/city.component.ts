import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CityService} from './city.service';
import {City} from './city.types';

@Component({
  selector: 'se-map-city',
  templateUrl: 'city.component.html'
})

export class CityComponent implements OnInit {
  @Input() cityName: string;
  @Input() show: boolean;
  @Output() returnEvent = new EventEmitter();
  city = new City();

  public doughnutChartLabels: string[] = ['SolarLITE', 'SolarFLEX', 'SolarPEAK'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    console.log('City view has been initiated');
    this.city = this.cityService.getCityByName(this.cityName);
    this.lineChartData = this.cityService.getMonthlyConsumption(this.cityName, 2017);
  }

  chartTypeToggle() {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
}
