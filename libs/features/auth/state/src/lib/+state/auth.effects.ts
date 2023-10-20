import { AuthFacade } from './auth.facade';
import { TokenInfo } from '@llp/models';
import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, catchError, of, tap } from 'rxjs';
import { AuthService } from '@llp/features/auth/data-access';
import { TokenStorageService } from '@llp/shared/services';
import * as AuthActions from './auth.actions';
import { GeneralLoadingService } from '@llp/shared/services';
import { ToastNotificationService } from '@llp/ui/ui-kit/toast-notification';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  private actions$ = inject(Actions);

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private generalLoadingService: GeneralLoadingService,
    private notificationService: ToastNotificationService,
    private authFacade: AuthFacade,
  ) {}

  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AuthenticateUser),
      switchMap(({ loginPayload }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.authService.login(loginPayload).pipe(
          tap((tokenInfo: TokenInfo) =>
            this.tokenStorageService.setApiToken(tokenInfo.token),
          ),
          switchMap(() => [AuthActions.AuthenticateUserSuccess()]),
          catchError(() => of(AuthActions.AuthenticateUserFail())),
        );
      }),
    ),
  );

  authenticateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.AuthenticateUserSuccess,
          AuthActions.RegisterUserSuccess,
          ),
        tap(() => {
          this.authFacade.getUserByToken();
          this.router.navigateByUrl('/');
          this.notificationService.showNotification({
            message: 'Hi there!',
            icon: 'waving_hand',
          });
        }),
      ),
    { dispatch: false },
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterUser),
      switchMap(({ user }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.authService.register(user).pipe(
          tap((tokenInfo: TokenInfo) =>
            this.tokenStorageService.setApiToken(tokenInfo.token),
          ),
          switchMap(() => [AuthActions.RegisterUserSuccess()]),
          catchError(() => of(AuthActions.RegisterUserFail())),
        );
      }),
    ),
  );

  getUserByToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.GetUserByToken),
      switchMap(() => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.authService.getUserByToken().pipe(
          switchMap(user => [AuthActions.GetUserByTokenSuccess({ user })]),
          catchError(() => of(AuthActions.GetUserByTokenFail())),
        );
      }),
    ),
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Logout),
      tap(() => {
        this.tokenStorageService.clearTokens();
        this.router.navigateByUrl('/auth/login');
      }),
      switchMap(() => [AuthActions.LogoutSuccess()]),
      catchError(() => of(AuthActions.LogoutFail())),
    ),
  );

  setIsLoadingFalse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.AuthenticateUserFail,
          AuthActions.RegisterUserSuccess,
          AuthActions.RegisterUserFail,
          AuthActions.AuthenticateUserSuccess,
          AuthActions.GetUserByTokenFail,
          AuthActions.GetUserByTokenSuccess,
        ),
        tap(() => this.generalLoadingService.setIsLoadingFalse()),
      ),
    { dispatch: false },
  );
}
