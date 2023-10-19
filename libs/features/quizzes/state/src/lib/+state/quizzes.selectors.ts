import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QUIZZES_FEATURE_KEY, QuizzesState } from './quizzes.reducer';

export const selectQuizzesState = createFeatureSelector<QuizzesState>(QUIZZES_FEATURE_KEY);

export const selectAllQuizzes = createSelector(selectQuizzesState, (state: QuizzesState) => state.quizzes);

export const selectSelectedQuiz = createSelector(selectQuizzesState, (state: QuizzesState) => state.selectedQuiz);

export const selectPassedQuiz = createSelector(selectQuizzesState, (state: QuizzesState) => state.passedQuiz);

export const selectAnswers = createSelector(selectQuizzesState, (state: QuizzesState) => state.answers);

