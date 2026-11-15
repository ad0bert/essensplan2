import { Injectable, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { UserComponent, UserDialogType } from '../component/application/user/user.component';
import { UserService } from './UserService';

@Injectable({ providedIn: 'root' })
export class UserDialogService {
  private readonly dialog = inject(MatDialog);
  private readonly userService = inject(UserService);

  /** Opens the user dialog. Asking for the profile while logged out shows the login form. */
  open(type: UserDialogType = 'user'): MatDialogRef<UserComponent> {
    const resolved = type === 'user' && !this.userService.isLoggedIn() ? 'login' : type;
    return this.dialog.open<UserComponent, UserDialogType>(UserComponent, {
      width: '512px',
      maxWidth: '95vw',
      data: resolved,
    });
  }
}
