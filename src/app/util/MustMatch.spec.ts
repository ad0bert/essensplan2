import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './MustMatch';

describe('MustMatch', () => {
  const createForm = () =>
    new FormGroup(
      {
        password: new FormControl(''),
        rePassword: new FormControl('', Validators.required),
      },
      { validators: MustMatch('password', 'rePassword') },
    );

  it('flags differing values on the matching control', () => {
    const form = createForm();
    form.setValue({ password: 'secret123', rePassword: 'secret124' });
    expect(form.controls.rePassword.hasError('mustMatch')).toBe(true);
    expect(form.valid).toBe(false);
  });

  it('clears the error once the values match', () => {
    const form = createForm();
    form.setValue({ password: 'secret123', rePassword: 'other' });
    form.controls.rePassword.setValue('secret123');
    expect(form.controls.rePassword.errors).toBeNull();
    expect(form.valid).toBe(true);
  });

  it('keeps other validation errors of the matching control', () => {
    const form = createForm();
    form.controls.password.setValue('secret123');
    expect(form.controls.rePassword.hasError('required')).toBe(true);
    expect(form.controls.rePassword.hasError('mustMatch')).toBe(true);
  });
});
