import { TokenInfo, User } from '@llp/model';
import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, catchError, of, tap } from 'rxjs';
import { AuthService } from '@llp/features/auth/data-access';
import { TokenStorageService } from '@llp/util/token-service';
import * as AuthActions from './auth.actions';
import { GeneralLoadingService } from '@llp/shared/services';
import { ToastNotificationService } from '@llp/ui/toast-notification';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private generalLoadingService: GeneralLoadingService,
    private notificationService: ToastNotificationService,
  ) {}

  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AuthenticateUser),
      switchMap(({ loginPayload }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.authService.login(loginPayload).pipe(
          tap((tokenInfo: TokenInfo) => this.tokenStorageService.setApiToken(tokenInfo.token)),
          switchMap(() => [AuthActions.AuthenticateUserSuccess()]),
          catchError(() => of(AuthActions.AuthenticateUserFail()))
        );
      })
    )
  );

  authenticateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AuthenticateUserSuccess),
        tap(() => {

          this.notificationService.showNotification({
            message: 'Hi there!',
            icon: 'waving_hand',
          })
        })
      ),
    { dispatch: false }
  );

  authenticateUserFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.AuthenticateUserFail,
          AuthActions.RegisterUserSuccess,
          AuthActions.RegisterUserFail,
          AuthActions.AuthenticateUserSuccess,
          ),
        tap(() => this.generalLoadingService.setIsLoadingFalse())
      ),
    { dispatch: false }
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterUser),
      switchMap(({ user }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.authService.register(user).pipe(
          switchMap((user: User) => [AuthActions.RegisterUserSuccess({ user })]),
          catchError(() => of(AuthActions.RegisterUserFail()))
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Logout),
      tap(() => {
        this.tokenStorageService.clearTokens();
        this.router.navigateByUrl('/auth/login');
      }),
      switchMap(() => [AuthActions.LogoutSuccess()]),
      catchError(() => of(AuthActions.LogoutFail()))
    )
  );
}
