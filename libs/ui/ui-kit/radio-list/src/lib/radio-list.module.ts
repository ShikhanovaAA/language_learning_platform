import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioListComponent } from './components/radio-list/radio-list.component';
import { RadioListBilderComponent } from './components/radio-list-builder/radio-list-builder.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupPipeModule } from '@llp/shared/pipes/form-group';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { FormValidationErrorsModule } from '@llp/ui/components/form-validation-errors';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    UiInputModule,
    FormGroupPipeModule,
    FormControlErrorsDirectiveModule,
    FormValidationErrorsModule,
  ],
  declarations: [
    RadioListComponent,
    RadioListBilderComponent,
  ],
  exports: [
    RadioListComponent,
    RadioListBilderComponent,
  ],
})
export class UiRadioListModule {}
