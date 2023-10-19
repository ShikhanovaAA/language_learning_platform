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
import { FormGroupPipeModule } from '@llp/shared/pipes/form-group';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { QuestionQuizViewComponent } from './components/question-quiz-view/question-quiz-view.component';
import { DynamicFormPassedQuizViewComponent } from './components/dynamic-form-passed-quiz-view/dynamic-form-passed-quiz-view.component';
import { QuestionPassedQuizViewComponent } from './components/question-passed-quiz-view/question-passed-quiz-view.component';
import { QuizStepperComponent } from './components/quiz-stepper/quiz-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DynamicFormStepperViewComponent } from './components/dynamic-form-stepper-view/dynamic-form-stepper-view.component';
import { DynamicFormListViewComponent } from './components/dynamic-form-list-view/dynamic-form-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    UiFormFieldModule,
    UiInputModule,
    UiSelectModule,
    UiRadioListModule,
    UiButtonModule,
    UiCheckboxModule,
    FormGroupPipeModule,
    FormControlErrorsDirectiveModule,
    CdkStepperModule,
  ],
  declarations: [
    QuestionComponent,
    DynamicFormComponent,
    DynamicFormBuilderComponent,
    QuestionBuilderComponent,
    QuestionQuizViewComponent,
    DynamicFormPassedQuizViewComponent,
    QuestionPassedQuizViewComponent,
    QuizStepperComponent,
    DynamicFormStepperViewComponent,
    DynamicFormListViewComponent,
  ],
  exports: [
    QuestionComponent,
    DynamicFormComponent,
    DynamicFormBuilderComponent,
    QuestionBuilderComponent,
    QuestionQuizViewComponent,
    DynamicFormPassedQuizViewComponent,
    QuestionPassedQuizViewComponent,
    DynamicFormStepperViewComponent,
  ],
})
export class DynamicFormModule {}
