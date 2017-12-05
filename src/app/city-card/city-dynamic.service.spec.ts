import {CityDynamicService} from './city-dynamic.service';
import {CityComponent} from './city.component';

describe('dynamic location service', () => {
  const factoryResolver = jasmine.createSpyObj('ComponentFactoryResolve', ['resolveComponentFactory']);

  it('adds new city component', () => {
    const cityDynamicService = new CityDynamicService(factoryResolver);
    const component = jasmine.createSpyObj('CityComponent', ['hostView', 'instance']);
    const factory = jasmine.createSpyObj('ComponentFactory', ['create']);
    const viewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['insert']);
    const expectedCity = 'Singapore';
    factory.create.and.returnValue(component);
    factoryResolver.resolveComponentFactory.and.returnValue(factory);
    cityDynamicService.setRootViewContainerRef(viewContainerRef);

    cityDynamicService.addDynamicCharts(expectedCity);

    expect(factoryResolver.resolveComponentFactory).toHaveBeenCalledWith(CityComponent);
    expect(factory.create).toHaveBeenCalledWith(viewContainerRef.parentInjector);
    expect(viewContainerRef.insert).toHaveBeenCalledWith(component.hostView);
    expect(cityDynamicService.getAllComponents()).toEqual([component.instance]);
  });

  it('clear the components', () => {
    const cityDynamicService = new CityDynamicService(factoryResolver);
    const viewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['clear', 'insert']);
    const expectedCity = 'Singapore';
    cityDynamicService.setRootViewContainerRef(viewContainerRef);

    cityDynamicService.addDynamicCharts(expectedCity);

    cityDynamicService.clear();

    expect(viewContainerRef.clear).toHaveBeenCalled();
  });
});
