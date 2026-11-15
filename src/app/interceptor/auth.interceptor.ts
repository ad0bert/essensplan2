import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { environment } from '../../environments/environment';
import { UserService } from '../service/UserService';

/**
 * Attaches the session token to requests against our own backend.
 * Requests to other hosts, or while logged out, are sent unchanged.
 */
export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = inject(UserService).getToken();
  if (!token || !request.url.startsWith(environment.apiBasePath)) {
    return next(request);
  }
  return next(request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
