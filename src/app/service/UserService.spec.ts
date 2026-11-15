import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { UserService } from './UserService';

describe('UserService', () => {
  let service: UserService;
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('is logged out without a stored session', () => {
    expect(service.isLoggedIn()).toBe(false);
    expect(service.getToken()).toBeNull();
  });

  it('stores the session after a successful login', () => {
    const expiresAt = new Date(Date.now() + 60_000).toISOString();
    service.login({ email: 'peter', password: 'secret123' }).subscribe();

    const request = http.expectOne((r) => r.url.endsWith('/api/auth/api/auth/signin'));
    expect(request.request.body).toEqual({ email: 'peter', password: 'secret123' });
    request.flush({ token: 'tok', expiresAt });

    expect(service.isLoggedIn()).toBe(true);
    expect(service.getToken()).toBe('tok');
    expect(service.userName()).toBe('peter');
    expect(localStorage.getItem('id_token')).toBe('tok');
  });

  it('treats an expired session as logged out', () => {
    service.login({ email: 'peter', password: 'secret123' }).subscribe();
    http
      .expectOne((r) => r.url.endsWith('/signin'))
      .flush({ token: 'tok', expiresAt: new Date(Date.now() - 1000).toISOString() });

    expect(service.isLoggedIn()).toBe(false);
    expect(service.getToken()).toBeNull();
  });

  it('clears the session on logout', () => {
    service.login({ email: 'peter', password: 'secret123' }).subscribe();
    http
      .expectOne((r) => r.url.endsWith('/signin'))
      .flush({ token: 'tok', expiresAt: new Date(Date.now() + 60_000).toISOString() });

    service.logout();

    expect(service.isLoggedIn()).toBe(false);
    expect(localStorage.getItem('id_token')).toBeNull();
  });

  it('requests the sign-up response as text', () => {
    service
      .register({ username: 'peter', email: 'p@example.com', password: 'secret123' })
      .subscribe();
    const request = http.expectOne((r) => r.url.endsWith('/signup'));
    expect(request.request.responseType).toBe('text');
    request.flush('User registered successfully!');
  });
});
