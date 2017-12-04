import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  imports: [MatNativeDateModule],
  exports: [
    NoopAnimationsModule,
    CdkTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatToolbarModule
  ]
})
export class MaterialModule {
}
