import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { environment } from '../../environments/environment';
import { UserService } from '../service/UserService';
import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  let http: HttpClient;
  let controller: HttpTestingController;
  let token: string | null;

  beforeEach(() => {
    token = null;
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: UserService, useValue: { getToken: () => token } },
      ],
    });
    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => controller.verify());

  it('adds the bearer token to backend requests', () => {
    token = 'tok';
    http.get(`${environment.apiBasePath}/api/recipes`).subscribe();
    const request = controller.expectOne(`${environment.apiBasePath}/api/recipes`);
    expect(request.request.headers.get('Authorization')).toBe('Bearer tok');
    request.flush([]);
  });

  it('sends no header while logged out', () => {
    http.get(`${environment.apiBasePath}/api/recipes`).subscribe();
    const request = controller.expectOne(`${environment.apiBasePath}/api/recipes`);
    expect(request.request.headers.has('Authorization')).toBe(false);
    request.flush([]);
  });

  it('never sends the token to other hosts', () => {
    token = 'tok';
    http.get('https://example.com/data').subscribe();
    const request = controller.expectOne('https://example.com/data');
    expect(request.request.headers.has('Authorization')).toBe(false);
    request.flush({});
  });
});
