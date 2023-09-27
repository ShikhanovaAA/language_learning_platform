import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPayload, TokenInfo, NewUser, User } from '@llp/models';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { userDtoToUser } from './models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: LoginPayload): Observable<TokenInfo> {
    return this.httpClient.post<TokenInfo>('api/auth/login', user);
  }

  register(user: NewUser): Observable<TokenInfo> {
    return this.httpClient.post<TokenInfo>('api/auth/registration', user);
  }

  getUserByToken(): Observable<User> {
    return this.httpClient.get<User>('api/users/user-by-token').pipe(map(user => userDtoToUser(user)));
  }
}
