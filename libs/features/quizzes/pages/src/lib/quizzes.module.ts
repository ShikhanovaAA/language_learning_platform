import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '@llp/ui/components/dynamic-form';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizDetailsComponent } from './pages/quiz-details/quiz-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewQuizComponent } from './pages/new-quiz/new-quiz.component';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { UiFormFieldModule } from '@llp/ui/ui-kit/form-field';
import { UiButtonModule } from '@llp/ui/ui-kit/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiFormFieldModule,
    DynamicFormModule,
    QuizRoutingModule,
    UiInputModule,
    UiButtonModule,
    MatIconModule,
    FormControlErrorsDirectiveModule,
  ],
  declarations: [
    QuizDetailsComponent,
    NewQuizComponent,
  ],
})
export class QuizzesModule {}
