import { Injectable, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { SignInForm, SignUpForm, UserApiImplService } from '../generated';

const TOKEN_KEY = 'id_token';
const EXPIRES_KEY = 'expires_at';
const USER_KEY = 'user_name';

/** Shape of the sign-in response delivered by the backend. */
export interface AuthResult {
  token: string;
  expiresAt: string;
}

interface Session {
  token: string;
  expiresAt: number;
  userName: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly api = inject(UserApiImplService);
  private readonly session = signal<Session | null>(readStoredSession());

  register(user: SignUpForm): Observable<string> {
    return this.api.registerUser(user);
  }

  /** Signs in and stores the session on success. */
  login(user: SignInForm): Observable<void> {
    return this.api.authenticateUser(user).pipe(
      tap((result) => this.setSession(result as AuthResult, user.email)),
      map(() => undefined),
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    localStorage.removeItem(USER_KEY);
    this.session.set(null);
  }

  isLoggedIn(): boolean {
    const session = this.session();
    return session !== null && Date.now() < session.expiresAt;
  }

  userName(): string {
    return this.isLoggedIn() ? (this.session()?.userName ?? '') : '';
  }

  getToken(): string | null {
    return this.isLoggedIn() ? (this.session()?.token ?? null) : null;
  }

  private setSession(result: AuthResult, userName: string): void {
    const expiresAt = new Date(result.expiresAt).getTime();
    localStorage.setItem(TOKEN_KEY, result.token);
    localStorage.setItem(EXPIRES_KEY, result.expiresAt);
    localStorage.setItem(USER_KEY, userName);
    this.session.set({ token: result.token, expiresAt, userName });
  }
}

function readStoredSession(): Session | null {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const expires = localStorage.getItem(EXPIRES_KEY);
    if (!token || !expires) {
      return null;
    }
    const expiresAt = new Date(expires).getTime();
    if (Number.isNaN(expiresAt)) {
      return null;
    }
    return { token, expiresAt, userName: localStorage.getItem(USER_KEY) ?? '' };
  } catch {
    return null;
  }
}
