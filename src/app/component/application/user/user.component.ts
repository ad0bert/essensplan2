import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export type UserDialogType = 'login' | 'register' | 'user';

@Component({
  selector: 'app-user',
  imports: [LoginComponent, RegisterComponent, AccountComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  private readonly dialogRef = inject<MatDialogRef<UserComponent>>(MatDialogRef);
  protected readonly type = signal<UserDialogType>(inject<UserDialogType>(MAT_DIALOG_DATA));

  onChangeType(type: UserDialogType): void {
    this.type.set(type);
  }

  onDialogClose(): void {
    this.dialogRef.close();
  }
}
