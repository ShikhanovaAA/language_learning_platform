import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '@llp/shared/services';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {

    if (this.tokenStorageService.isTokenExpired()) return next.handle(request);

    const apiToken = this.tokenStorageService.getApiToken();
    const requestWithToken = this.applyTokenToRequest(request, apiToken);

    return next.handle(requestWithToken);
  }

  private applyTokenToRequest<T>(request: HttpRequest<T>, accessToken: string) {
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}
