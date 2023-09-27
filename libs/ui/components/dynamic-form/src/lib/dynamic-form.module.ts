import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    QuestionComponent,
    DynamicFormComponent,
  ],
})
export class UiComponentsDynamicFormModule {}
