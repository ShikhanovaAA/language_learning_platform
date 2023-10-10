import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputBuilderComponent } from './components/input-builder/input-builder.component';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FormControlErrorsDirectiveModule,
  ],
  declarations: [
    InputComponent,
    InputBuilderComponent,
  ],
  exports: [
    InputComponent,
    InputBuilderComponent,
  ],
})
export class UiInputModule {}
