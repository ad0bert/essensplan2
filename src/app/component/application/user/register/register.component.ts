import { Component, OnInit, Output, EventEmitter, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/util/MustMatch';
import { UserService } from 'src/app/service/UserService';
import { SignUpForm } from 'src/app/generated';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  @Output()
  changeType = new EventEmitter<string>();

  @Output()
  dialogClose = new EventEmitter<boolean>();

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rePassword: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'rePassword')
  });

  constructor(private readonly fb: FormBuilder,
              private readonly userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    if (this.registerForm.valid) {
      const user: SignUpForm = {
        username: this.registerForm.getRawValue().username,
        email: this.registerForm.getRawValue().email,
        password: this.registerForm.getRawValue().password
      };
      this.userService.register(user)
        .subscribe(
          (response) => {this.dialogClose.emit(true)},
          (error) => this.handleError(error)
        )
    }
    event.preventDefault();
  }

  private handleError(error: any) {
    this.registerForm.get('username').setErrors({alreadyTaken: true});
  }

}
