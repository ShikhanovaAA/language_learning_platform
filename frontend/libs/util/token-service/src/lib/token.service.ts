import { Injectable, Inject } from '@angular/core';
import { LocalStorageKeysEnum } from '@llp/model';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

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
}
