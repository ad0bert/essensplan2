import { Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { UserService } from 'src/app/service/UserService';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.html',
  styleUrls: ['sidenav.scss'],
})
export class Sidenav {
  @ViewChild(MatSidenav, {static: true}) snav: MatSidenav;

  constructor(private userService: UserService){}

  isSideNavActive(): boolean {
    return this.snav.opened;
  }

}
