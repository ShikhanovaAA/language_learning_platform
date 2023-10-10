import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { UiSelectModule } from '@llp/ui/ui-kit/select';
import { UiFormFieldModule } from '@llp/ui/ui-kit/form-field';
import { UiRadioListModule } from '@llp/ui/ui-kit/radio-list';
import { UiButtonModule } from '@llp/ui/ui-kit/button';
import { UiCheckboxModule } from '@llp/ui/ui-kit/checkbox';
import { DynamicFormBuilderComponent } from './components/dynamic-form-builder/dynamic-form-builder.component';
import { QuestionBuilderComponent } from './components/question-builder/question-builder.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    UiFormFieldModule,
    UiInputModule,
    UiSelectModule,
    UiRadioListModule,
    UiButtonModule,
    UiCheckboxModule,
  ],
  declarations: [
    QuestionComponent,
    DynamicFormComponent,
    DynamicFormBuilderComponent,
    QuestionBuilderComponent,
  ],
  exports: [
    QuestionComponent,
    DynamicFormComponent,
    DynamicFormBuilderComponent,
    QuestionBuilderComponent,
  ],
})
export class DynamicFormModule {}
