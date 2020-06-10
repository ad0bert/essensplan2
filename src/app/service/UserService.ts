import { Injectable } from '@angular/core';
import * as moment from 'moment/moment.js';
import { SignInForm, UserApiImplService, SignUpForm } from '../generated';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../component/application/user/user.component';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

    constructor(
        private readonly api: UserApiImplService,
        private readonly dialog: MatDialog) {}

    public openUserDialog(type: string = 'user'): MatDialogRef<UserComponent, unknown> {
        return this.dialog.open(
            UserComponent,
            {
              width: '512px',
              disableClose: false,
              hasBackdrop: true,
              data: type
            }
          );
    }

    public register(user: SignUpForm) {
        return this.api.registerUser(user);
    }

    public login(user: SignInForm) {
        return this.api.authenticateUser(user);
    }
          
    public setSession(authResult) {
        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', authResult.expiresAt);
    }          

    public logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        const res = moment().isBefore(this.getExpiration());
        return res;
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public getExpiration() {
        const expiration = new Date(localStorage.getItem("expires_at"));
        //const expiresAt = JSON.parse(expiration);
        return moment(expiration);
    }
    
    public getToken() {
        return localStorage.getItem('id_token');
    }

}