import { Injectable, Inject } from '@angular/core';
import { LocalStorageKeysEnum } from '@llp/models';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { DecodedToken } from './models/deocoded-token';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  getApiToken(): string {
    return this.localStorage.getItem(LocalStorageKeysEnum.ACCESS_TOKEN) || '';
  }

  setApiToken(accessToken: string): void {
    this.localStorage.setItem(LocalStorageKeysEnum.ACCESS_TOKEN, accessToken);
  }

  clearTokens(): void {
    this.localStorage.removeItem(LocalStorageKeysEnum.ACCESS_TOKEN);
  }

  isTokenValid(): boolean {
    const token = this.getApiToken();
    if (!token) return false;

    const decoded: DecodedToken = jwt_decode(token);

    return decoded.exp > Date.now() / 1000;
  }

  isTokenExpired(): boolean {
    return !this.isTokenValid();
  }
}
