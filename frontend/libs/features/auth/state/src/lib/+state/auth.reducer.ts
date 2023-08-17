import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends EntityState<AuthEntity> {}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialAuthState: AuthState = authAdapter.getInitialState({});

const reducer = createReducer(
  initialAuthState,
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
