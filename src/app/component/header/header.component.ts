import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UserDialogService } from '../../service/UserDialogService';
import { UserService } from '../../service/UserService';
import { UserDialogType } from '../application/user/user.component';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly userService = inject(UserService);
  private readonly userDialog = inject(UserDialogService);

  user(type: UserDialogType): void {
    this.userDialog.open(type);
  }
}
