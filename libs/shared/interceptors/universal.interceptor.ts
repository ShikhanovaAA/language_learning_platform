import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService} from '@llp/shared/environments';

@Injectable()
export class UniversalRequestApiInterceptor implements HttpInterceptor {

  env = this.environmentService.getEnvironmentVariables();

  constructor(private environmentService: EnvironmentService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;

    const requestUrl = req.url.startsWith('/') ? `${req.url}` : `/${req.url}`;
    const absoluteRequestUrl = `${this.env.dockerApiUrl}${requestUrl}`;

    serverReq = req.clone({
        url: absoluteRequestUrl,
    });

    return next.handle(serverReq);
  }
}
