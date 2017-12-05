import {Injectable, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {CityComponent} from './city.component';

@Injectable()
export class CityDynamicService {
  private rootViewContainer: ViewContainerRef;
  private cityComponents: CityComponent [] = [];

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicCharts(city) {
    const factory = this.factoryResolver.resolveComponentFactory(CityComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    component.instance.cityName = city;
    this.cityComponents.push(component.instance);
    this.rootViewContainer.insert(component.hostView);
  }

  getAllComponents() {
    return this.cityComponents;
  }

  clear() {
    this.cityComponents = [];
    this.rootViewContainer.clear();
  }
}
