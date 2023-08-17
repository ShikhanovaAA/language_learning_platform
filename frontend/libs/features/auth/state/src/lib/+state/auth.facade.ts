import { Injectable, inject } from '@angular/core';
import { LoginPayload, NewUser } from '@llp/model';
import { Store, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  authenticateUser(loginPayload: LoginPayload) {
    this.dispatch(AuthActions.AuthenticateUser({ loginPayload }));
  }

  registerUser(user: NewUser) {
    this.dispatch(AuthActions.RegisterUser({ user }));
  }

  logout() {
    this.dispatch(AuthActions.Logout());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
