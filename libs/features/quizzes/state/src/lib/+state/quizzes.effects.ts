import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap } from 'rxjs';
import * as QuizzesActions from './quizzes.actions';
import { GeneralLoadingService } from '@llp/shared/services';
import { ToastNotificationService } from '@llp/ui/ui-kit/toast-notification';
import { QuizService } from '@llp/features/quizzes/data-access';
import { Router } from '@angular/router';

@Injectable()
export class QuizzesEffects {
  private actions$ = inject(Actions);

  constructor(
    private quizService: QuizService,
    private generalLoadingService: GeneralLoadingService,
    private notificationService: ToastNotificationService,
    private router: Router,
  ) {}

  createQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizzesActions.CreateQuiz),
      switchMap(({ newQuiz }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.quizService.createQuiz(newQuiz).pipe(
          switchMap(newQuiz => [QuizzesActions.CreateQuizSuccess({ newQuiz })]),
          catchError(() => of(QuizzesActions.CreateQuizFail())),
        );
      }),
    ),
  );

  getAllQuizzes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizzesActions.GetAllQuizzes),
      switchMap(() => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.quizService.getAllQuizzes().pipe(
          switchMap(({quizzes, answers}) => [QuizzesActions.GetAllQuizzesSuccess({ quizzes, answers })]),
          catchError(() => of(QuizzesActions.GetAllQuizzesFail())),
        );
      }),
    ),
  );

  getQuizById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizzesActions.GetQuizById),
      switchMap(({ quizId }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.quizService.getQuizById(quizId).pipe(
          switchMap(quiz => [QuizzesActions.GetQuizByIdSuccess({ quiz })]),
          catchError(() => of(QuizzesActions.GetQuizByIdFail())),
        );
      }),
    ),
  );

  getPassedQuizById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizzesActions.GetPassedQuizById),
      switchMap(({ quizId }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.quizService.getPassedQuizById(quizId).pipe(
          switchMap(quiz => [QuizzesActions.GetPassedQuizByIdSuccess({ quiz })]),
          catchError(() => of(QuizzesActions.GetPassedQuizByIdFail())),
        );
      }),
    ),
  );

  saveQuizAnswers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizzesActions.SaveQuizAnswers),
      switchMap(({ quizAnswers }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.quizService.saveQuizAnswers(quizAnswers).pipe(
          switchMap(quizAnswers => [QuizzesActions.SaveQuizAnswersSuccess({ quizAnswers })]),
          catchError(() => of(QuizzesActions.SaveQuizAnswersFail())),
        );
      }),
    ),
  );

  stopLoading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          QuizzesActions.CreateQuizSuccess,
          QuizzesActions.CreateQuizFail,
          QuizzesActions.GetAllQuizzesSuccess,
          QuizzesActions.GetAllQuizzesFail,
          QuizzesActions.GetQuizByIdSuccess,
          QuizzesActions.GetQuizByIdFail,
          QuizzesActions.SaveQuizAnswersSuccess,
          QuizzesActions.SaveQuizAnswersFail,
          QuizzesActions.GetPassedQuizByIdSuccess,
          QuizzesActions.GetPassedQuizByIdFail,
        ),
        tap(() => this.generalLoadingService.setIsLoadingFalse()),
      ),
    { dispatch: false },
  );

  createQuizSuccessfully$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          QuizzesActions.CreateQuizSuccess,
        ),
        tap(() => {
          this.router.navigateByUrl(`/quizzes`);

          this.notificationService.showNotification({
            message: 'Quiz saved successfully',
            icon: 'save',
          });
        }),
      ),
    { dispatch: false },
  );

  saveQuizAnswersSuccessfully$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          QuizzesActions.SaveQuizAnswersSuccess,
        ),
        tap(({quizAnswers}) => {
          this.notificationService.showNotification({
            message: 'Answers saved successfully',
            icon: 'save',
          });

          const quizId = quizAnswers[0].quizId;
          this.router.navigateByUrl(`/quizzes/passed/${quizId}`);
        }),
      ),
    { dispatch: false },
  );
}
