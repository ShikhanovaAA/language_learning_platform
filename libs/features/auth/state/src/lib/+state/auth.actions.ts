import { LoginPayload, NewUser, User } from '@llp/model';
import { createAction, props } from '@ngrx/store';

export const AuthenticateUser = createAction('[Auth] Authenticate User', props<{ loginPayload: LoginPayload }>());

export const AuthenticateUserFail = createAction('[Auth] Authenticate User Fail');

export const AuthenticateUserSuccess = createAction('[Auth] Authenticate User Success');


export const RegisterUser = createAction('[Auth] Register User', props<{ user: NewUser }>());

export const RegisterUserSuccess = createAction('[Auth] Register User Success');

export const RegisterUserFail = createAction('[Auth] Register User Fail');


export const Logout = createAction('[Auth] Logout');

export const LogoutSuccess = createAction('[Auth] Logout Success');

export const LogoutFail = createAction('[Auth] Logout Fail');


export const GetUserByToken = createAction('[Auth] Get User By Token');

export const GetUserByTokenSuccess = createAction('[Auth] Get User By Token Success', props<{ user: User }>());

export const GetUserByTokenFail = createAction('[Auth] Get User By Token Fail');
