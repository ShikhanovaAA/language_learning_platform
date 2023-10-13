import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatIconModule } from '@angular/material/icon';
import { SelectBuilderComponent } from './select-builder/select-builder.component';
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
    SelectComponent,
    SelectBuilderComponent,
  ],
  exports: [
    SelectComponent,
    SelectBuilderComponent,
  ],
})
export class UiSelectModule {}
