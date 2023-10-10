import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorsDirective } from './form-control-errors.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FormControlErrorsDirective],
  exports: [FormControlErrorsDirective],
})
export class FormControlErrorsDirectiveModule {}
