import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserComponent } from '../application/user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  user(type: string): void {
    const userDialog = this.dialog.open(
      UserComponent,
      {
        width: '512px',
        disableClose: false,
        hasBackdrop: true,
        data: type
      }
    );
    userDialog.afterClosed()
      .subscribe(value => {
        console.log(value);
      });
  }

  isUserLoggedIn(): boolean {
    return false;
  }

}
