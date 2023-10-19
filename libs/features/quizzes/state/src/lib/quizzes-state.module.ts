import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuizzesEffects } from './+state/quizzes.effects';
import { QuizzesFacade } from './+state/quizzes.facade';
import * as fromQuizzes from './+state/quizzes.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromQuizzes.QUIZZES_FEATURE_KEY, fromQuizzes.quizzesReducer),
    EffectsModule.forFeature([QuizzesEffects]),
  ],
  providers: [QuizzesFacade],

})
export class QuizzesStateModule {}
