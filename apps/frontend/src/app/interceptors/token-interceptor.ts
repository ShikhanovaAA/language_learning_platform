import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '@llp/util/token-service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenStorageService.isTokenExpired()) return next.handle(request);

    const apiToken = this.tokenStorageService.getApiToken();
    const requestWithToken = this.applyTokenToRequest(request, apiToken);

    return next.handle(requestWithToken);
  }

  private applyTokenToRequest(request: HttpRequest<any>, accessToken: string) {
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}
