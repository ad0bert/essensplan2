import { Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { UserService } from '../../../../service/UserService';

@Component({
  selector: 'app-account',
  imports: [MatButtonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  protected readonly userService = inject(UserService);
  readonly dialogClose = output<void>();

  logout(): void {
    this.userService.logout();
    this.dialogClose.emit();
  }
}
