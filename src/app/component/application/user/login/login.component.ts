import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/UserService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  changeType = new EventEmitter<string>();

  @Output()
  dialogClose = new EventEmitter<boolean>();

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private readonly fb: FormBuilder,
    private readonly userService: UserService
) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.getRawValue())
        .subscribe(
          (res) => {
            this.userService.setSession(res);
            this.dialogClose.emit(true);
          },
          (error) => {
            this.handleError(error);
          }
        );
    }
  }

  private handleError(error: HttpErrorResponse) {
    this.loginForm.setErrors({badCredentials: true});
  }

}
