import { Injectable, inject } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { AnswerDto, NewQuiz, Quiz } from '@llp/models';
import * as QuizzesActions from './quizzes.actions';
import * as QuizzesSelectors from './quizzes.selectors';

@Injectable()
export class QuizzesFacade {
  private readonly store = inject(Store);

  quizzes$ = this.store.pipe(select(QuizzesSelectors.selectAllQuizzes));
  selectedQuiz$ = this.store.pipe(select(QuizzesSelectors.selectSelectedQuiz));
  passedQuiz$ = this.store.pipe(select(QuizzesSelectors.selectPassedQuiz));

  createQuiz(newQuiz: NewQuiz) {
    this.dispatch(QuizzesActions.CreateQuiz({ newQuiz }));
  }

  getAllQuizzes() {
    this.dispatch(QuizzesActions.GetAllQuizzes());
  }

  getQuizById(quizId: Quiz['id']) {
    this.dispatch(QuizzesActions.GetQuizById({ quizId }));
  }

  getPassedQuizById(quizId: Quiz['id']) {
    this.dispatch(QuizzesActions.GetPassedQuizById({ quizId }));
  }

  saveQuizAnswers(quizAnswers: AnswerDto[]) {
    this.dispatch(QuizzesActions.SaveQuizAnswers({ quizAnswers }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
