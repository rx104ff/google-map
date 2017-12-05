import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {GoogleMapComponent} from './google-map/google-map.component';
import {
  MatToolbarModule, MatCardModule, MatStepperModule,
  MatSidenavModule,
  MatButtonModule
} from '@angular/material';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {AgmCoreModule} from '@agm/core';
import {RouterModule} from '@angular/router'
import {BrowserModule} from '@angular/platform-browser/';
import {SharedModule} from './shared/shared.module';

xdescribe('AppComponent', () => {
  let fixture: ComponentFixture<GoogleMapComponent>;
  let comp: GoogleMapComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        AppComponent,
        GoogleMapComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GoogleMapComponent);
      comp = fixture.componentInstance;
    });
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
