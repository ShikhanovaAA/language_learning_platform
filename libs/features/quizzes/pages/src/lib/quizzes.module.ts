import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '@llp/ui/components/dynamic-form';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizDetailsComponent } from './pages/quiz-details/quiz-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormModule,
    QuizRoutingModule,
  ],
  declarations: [QuizDetailsComponent],
})
export class QuizzesModule {}
