export class City {
  constructor(public name = '',
              public lat: number = null,
              public lng: number = null,
              public lable?: string,
              public draggable = false,
              public generation?: number,
              public consumption?: number,
              public solarPercentage?: number) {
  }
}
