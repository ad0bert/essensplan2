import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { UserService } from '../../../../service/UserService';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let element: HTMLElement;
  const login = vi.fn();

  const fillAndSubmit = async () => {
    for (const [name, value] of [
      ['email', 'peter'],
      ['password', 'secret123'],
    ]) {
      const input = element.querySelector(`input[formcontrolname=${name}]`) as HTMLInputElement;
      input.value = value;
      input.dispatchEvent(new Event('input'));
    }
    await fixture.whenStable();
    (element.querySelector('button[type=submit]') as HTMLButtonElement).click();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    login.mockReset();
    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: { login } }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('disables submit until the form is filled', () => {
    expect((element.querySelector('button[type=submit]') as HTMLButtonElement).disabled).toBe(true);
  });

  it('closes the dialog after a successful login', async () => {
    login.mockReturnValue(of(undefined));
    const closed = vi.fn();
    fixture.componentInstance.dialogClose.subscribe(closed);

    await fillAndSubmit();

    expect(login).toHaveBeenCalledWith({ email: 'peter', password: 'secret123' });
    expect(closed).toHaveBeenCalled();
  });

  it('shows an error for wrong credentials', async () => {
    login.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 401 })));

    await fillAndSubmit();

    expect(element.querySelector('.form-error')?.textContent).toContain('Wrong');
  });
});
