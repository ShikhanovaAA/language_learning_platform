import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFalidationErrorsComponent } from './components/form-validation-errors/form-validation-errors.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [FormFalidationErrorsComponent],
  exports: [FormFalidationErrorsComponent],
})
export class FormValidationErrorsModule {}
