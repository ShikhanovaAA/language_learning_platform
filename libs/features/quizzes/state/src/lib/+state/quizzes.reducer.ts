import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { PassedQuiz, Quiz, FormQuiz, AnswerWithCorrectAnswerDto } from '@llp/models';
import * as QuizzesActions from './quizzes.actions';

export const QUIZZES_FEATURE_KEY = 'quizzes';

export interface QuizzesState extends EntityState<Quiz> {
  quizzes: Quiz[];
  selectedQuiz: FormQuiz | null;
  passedQuiz: PassedQuiz | null;
  answers: AnswerWithCorrectAnswerDto[] | null;
}

export interface QuizzesPartialState {
  readonly [QUIZZES_FEATURE_KEY]: QuizzesState;
}

export const quizzesAdapter: EntityAdapter<Quiz> = createEntityAdapter<Quiz>();

export const initialQuizzesState: QuizzesState = quizzesAdapter.getInitialState({
  quizzes: [],
  selectedQuiz: null,
  passedQuiz: null,
  answers: null,
});

const reducer = createReducer(
  initialQuizzesState,
  on(QuizzesActions.GetAllQuizzesSuccess, (state, { quizzes, answers }) => ({
    ...state,
    quizzes: quizzes,
    answers: answers,
  })),
  on(QuizzesActions.CreateQuizSuccess, (state, { newQuiz }) => ({
    ...state,
    quizzes: state.quizzes.concat(newQuiz),
  })),
  on(QuizzesActions.GetQuizByIdSuccess, (state, { quiz }) => ({
    ...state,
    selectedQuiz: quiz,
  })),
  on(QuizzesActions.GetPassedQuizByIdSuccess, (state, { quiz }) => ({
    ...state,
    passedQuiz: quiz,
  })),
);

export function quizzesReducer(state: QuizzesState | undefined, action: Action) {
  return reducer(state, action);
}
