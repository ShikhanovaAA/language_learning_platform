import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { AuthEntity } from './auth.models';
import { User } from '@llp/model';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends EntityState<AuthEntity> {
  user: User | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialAuthState: AuthState = authAdapter.getInitialState({
  user: null
});

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.GetUserByTokenSuccess, (state, { user }) => ({
    ...state,
    user,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
