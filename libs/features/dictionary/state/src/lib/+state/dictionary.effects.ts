import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap } from 'rxjs';
import * as DictionaryActions from './dictionary.actions';
import { GeneralLoadingService } from '@llp/shared/services';
import { ToastNotificationService } from '@llp/ui/ui-kit/toast-notification';
import { DictionaryService } from '@llp/features/dictionary/data-access';

@Injectable()
export class DictionaryEffects {
  private actions$ = inject(Actions);

  constructor(
    private dictionaryService: DictionaryService,
    private generalLoadingService: GeneralLoadingService,
    private notificationService: ToastNotificationService,
  ) {}

  getDictionaryWords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DictionaryActions.GetDictionaryWords),
      switchMap(() => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.dictionaryService.getDictionaryWords().pipe(
          switchMap((words) => [DictionaryActions.GetDictionaryWordsSuccess({ words })]),
          catchError(() => of(DictionaryActions.GetDictionaryWordsFail()))
        );
      })
    )
  );

  addWordToDictionary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DictionaryActions.AddWordToDictionary),
      switchMap(({ word }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.dictionaryService.addWordToDictionary(word).pipe(
          switchMap((word) => [DictionaryActions.AddWordToDictionarySuccess({ word })]),
          catchError(() => of(DictionaryActions.AddWordToDictionaryFail()))
        );
      })
    )
  );

  stopLoading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          DictionaryActions.AddWordToDictionarySuccess,
          DictionaryActions.AddWordToDictionaryFail,
          DictionaryActions.GetDictionaryWordsSuccess,
          DictionaryActions.GetDictionaryWordsFail,
        ),
        tap(() => this.generalLoadingService.setIsLoadingFalse())
      ),
    { dispatch: false }
  );

  addWordSuccessfully$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          DictionaryActions.AddWordToDictionarySuccess,
        ),
        tap(() => this.notificationService.showNotification({
          message: 'Word saved successfully',
          icon: 'save',
        }))
      ),
    { dispatch: false }
  );
}
