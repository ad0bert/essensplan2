import { Component, inject, output, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SignUpForm } from '../../../../generated';
import { UserService } from '../../../../service/UserService';
import { MustMatch } from '../../../../util/MustMatch';
import type { UserDialogType } from '../user.component';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);

  readonly changeType = output<UserDialogType>();
  readonly dialogClose = output<void>();

  protected readonly submitting = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  // Length limits follow the backend's SignUpForm schema (openapi.json).
  protected readonly registerForm = this.fb.nonNullable.group(
    {
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      rePassword: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
    },
    { validators: MustMatch('password', 'rePassword') },
  );

  onSubmit(): void {
    if (this.registerForm.invalid || this.submitting()) {
      return;
    }
    const { username, email, password } = this.registerForm.getRawValue();
    const user: SignUpForm = { username, email, password };
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.userService.register(user).subscribe({
      next: () => {
        this.submitting.set(false);
        // Account created: continue with the login form.
        this.changeType.emit('login');
      },
      error: (error: HttpErrorResponse) => {
        this.submitting.set(false);
        if (error.status === 400 || error.status === 409) {
          this.registerForm.controls.username.setErrors({ alreadyTaken: true });
        } else {
          this.errorMessage.set('Registration failed. Please try again later.');
        }
      },
    });
  }
}
