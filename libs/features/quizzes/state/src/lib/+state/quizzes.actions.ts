import { AnswerDto, NewQuiz, Quiz, AnswerWithCorrectAnswerDto, PassedQuiz, FormQuiz } from '@llp/models';
import { createAction, props } from '@ngrx/store';

export const CreateQuiz = createAction('[Quizzes] Create Quiz', props<{ newQuiz: NewQuiz }>());

export const CreateQuizSuccess = createAction('[Quizzes] Create Quiz Success', props<{ newQuiz: Quiz }>());

export const CreateQuizFail = createAction('[Quizzes] Create Quiz Fail');


export const GetAllQuizzes = createAction('[Quizzes] Get All Quizzes');

export const GetAllQuizzesSuccess = createAction('[Quizzes] Get All Quizzes Success', props<{ quizzes: Quiz[], answers: AnswerWithCorrectAnswerDto[] }>());

export const GetAllQuizzesFail = createAction('[Quizzes] Get All Quizzes Fail');


export const GetQuizById = createAction('[Quizzes] Get Quiz By Id', props<{ quizId: Quiz['id'] }>());

export const GetQuizByIdSuccess = createAction('[Quizzes] Get Quiz By Id Success', props<{ quiz: FormQuiz }>());

export const GetQuizByIdFail = createAction('[Quizzes] Get Quiz By Id Fail');


export const SaveQuizAnswers = createAction('[Quizzes] Save Quiz Answers', props<{ quizAnswers: AnswerDto[] }>());

export const SaveQuizAnswersSuccess = createAction('[Quizzes] Save Quiz Answers Success', props<{ quizAnswers: AnswerDto[] }>());

export const SaveQuizAnswersFail = createAction('[Quizzes] Save Quiz Answers Fail');


export const GetPassedQuizById = createAction('[Quizzes] Get Passed Quiz By Id', props<{ quizId: Quiz['id'] }>());

export const GetPassedQuizByIdSuccess = createAction('[Quizzes] Get Passed Quiz By Id Success', props<{ quiz: PassedQuiz }>());

export const GetPassedQuizByIdFail = createAction('[Quizzes] Get Passed Quiz By Id Fail');
