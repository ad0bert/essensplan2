import { Injectable } from '@angular/core';
import * as moment from 'moment/moment.js';
import { tap } from 'rxjs/operators';
import { SignInForm, UserApiImplService, SignUpForm } from '../generated';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

    constructor(private readonly api: UserApiImplService) {}

    register(user: SignUpForm) {
        return this.api.registerUser(user);
    }

    login(user: SignInForm) {
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
        console.log(res);
        return res;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = new Date(localStorage.getItem("expires_at"));
        //const expiresAt = JSON.parse(expiration);
        return moment(expiration);
    }
    
    public getToken() {
        return localStorage.getItem('id_token');
    }

}