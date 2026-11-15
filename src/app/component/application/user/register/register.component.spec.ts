import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';

import { UserService } from '../../../../service/UserService';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;
  const register = vi.fn();

  const fillForm = (overrides: Record<string, unknown> = {}) => {
    component['registerForm'].setValue({
      username: 'peter',
      email: 'peter@example.com',
      password: 'secret123',
      rePassword: 'secret123',
      checkbox: true,
      ...overrides,
    });
  };

  beforeEach(async () => {
    register.mockReset();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: UserService, useValue: { register } }],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('requires matching passwords and accepted terms', () => {
    fillForm({ rePassword: 'different' });
    expect(component['registerForm'].valid).toBe(false);
    fillForm({ checkbox: false });
    expect(component['registerForm'].valid).toBe(false);
    fillForm();
    expect(component['registerForm'].valid).toBe(true);
  });

  it('sends only the sign-up fields and switches to login on success', () => {
    register.mockReturnValue(of('ok'));
    const changeType = vi.fn();
    component.changeType.subscribe(changeType);
    fillForm();

    component.onSubmit();

    expect(register).toHaveBeenCalledWith({
      username: 'peter',
      email: 'peter@example.com',
      password: 'secret123',
    });
    expect(changeType).toHaveBeenCalledWith('login');
  });

  it('marks the username as taken when the backend rejects it', () => {
    register.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 400 })));
    fillForm();

    component.onSubmit();

    expect(component['registerForm'].controls.username.hasError('alreadyTaken')).toBe(true);
  });

  it('shows a generic error when the backend is unreachable', async () => {
    register.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 0 })));
    fillForm();

    component.onSubmit();
    await fixture.whenStable();

    expect(component['registerForm'].controls.username.hasError('alreadyTaken')).toBe(false);
    expect((fixture.nativeElement as HTMLElement).querySelector('.form-error')).not.toBeNull();
  });
});
