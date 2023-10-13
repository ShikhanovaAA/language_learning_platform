import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupPipe } from './pipes/form-group.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FormGroupPipe],
  exports: [FormGroupPipe],
})
export class FormGroupPipeModule {}
