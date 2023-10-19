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
import { QuizzesStateModule } from '@llp/features/quizzes/state';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { PassedQuizDetailsComponent } from './pages/passed-quiz-details/passed-quiz-details.component';
import { QuizLayoutComponent } from './components/quiz-layout/quiz-layout.component';
import { QuizItemComponent } from './components/quiz-item/quiz-item.component';

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
    QuizzesStateModule,
  ],
  declarations: [
    QuizDetailsComponent,
    NewQuizComponent,
    QuizListComponent,
    PassedQuizDetailsComponent,
    QuizLayoutComponent,
    QuizItemComponent,
  ],
})
export class QuizzesModule {}
