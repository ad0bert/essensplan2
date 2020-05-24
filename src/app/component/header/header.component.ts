import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/UserService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  user(type: string): void {
    const userDialog = this.userService.openUserDialog(type);
    userDialog.afterClosed()
      .subscribe(value => {
        // console.log(value);
      });
  }

  isUserLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  toDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
