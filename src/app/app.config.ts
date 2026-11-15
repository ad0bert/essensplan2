import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import { environment } from '../environments/environment';
import { provideApi } from './generated';
import { authInterceptor } from './interceptor/auth.interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideApi(environment.apiBasePath),
  ],
};
