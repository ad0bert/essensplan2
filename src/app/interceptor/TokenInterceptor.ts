import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../service/UserService';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private readonly userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.userService.getToken()}`
            }
          });
          return next.handle(request);
    }

}