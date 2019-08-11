import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  changeType = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

}
