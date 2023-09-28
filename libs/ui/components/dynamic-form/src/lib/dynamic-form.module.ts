import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { UiSelectModule } from '@llp/ui/ui-kit/select';
import { UiFormFieldModule } from '@llp/ui/ui-kit/form-field';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiFormFieldModule,
    UiInputModule,
    UiSelectModule,
  ],
  declarations: [
    QuestionComponent,
    DynamicFormComponent,
  ],
  exports: [
    QuestionComponent,
    DynamicFormComponent,
  ]
})
export class DynamicFormModule {}
