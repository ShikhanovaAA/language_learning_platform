import { Injectable, inject } from '@angular/core';
import { LoginPayload, NewUser } from '@llp/model';
import { Store, Action, select } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly store = inject(Store);

  user$ = this.store.pipe(select(AuthSelectors.selectUser));

  authenticateUser(loginPayload: LoginPayload) {
    this.dispatch(AuthActions.AuthenticateUser({ loginPayload }));
  }

  registerUser(user: NewUser) {
    this.dispatch(AuthActions.RegisterUser({ user }));
  }

  logout() {
    this.dispatch(AuthActions.Logout());
  }

  getUserByToken() {
    this.dispatch(AuthActions.GetUserByToken());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
