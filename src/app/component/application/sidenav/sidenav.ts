import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { UserDialogService } from '../../../service/UserDialogService';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
  templateUrl: 'sidenav.html',
  styleUrl: 'sidenav.scss',
})
export class Sidenav {
  private readonly userDialog = inject(UserDialogService);

  openProfile(): void {
    this.userDialog.open('user');
  }
}
