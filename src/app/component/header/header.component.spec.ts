import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { UserService } from '../../service/UserService';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  const loggedIn = signal(false);

  beforeEach(() => {
    loggedIn.set(false);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: { isLoggedIn: () => loggedIn(), userName: () => 'peter' },
        },
      ],
    });
  });

  it('offers login and register while logged out', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent;
    expect(text).toContain('Login');
    expect(text).toContain('Register');
  });

  it('shows the user name while logged in', async () => {
    loggedIn.set(true);
    const fixture = TestBed.createComponent(HeaderComponent);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent;
    expect(text).toContain('peter');
    expect(text).not.toContain('Register');
  });
});
