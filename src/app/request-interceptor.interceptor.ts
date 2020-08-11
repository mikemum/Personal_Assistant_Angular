import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class RequestInterceptorInterceptor implements HttpInterceptor {
  token: string;
  constructor(private _userService: UserService) {
    // console.log('inside RequestInterceptorInterceptor constructor....');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // let res = this._userService.getUser();
    let token = this._userService.getToken();
    console.log('inside interceptor ... ', { token });
    if (!token) {
      token = JSON.parse(localStorage.getItem('user'))?.token;
      console.log('inside interceptor ... ', { token });
    }

    console.log('inside httptinterceptor...', { token });
    let reqCopy = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });

    // console.log({ reqCopy });
    return next.handle(reqCopy);
  }
}
