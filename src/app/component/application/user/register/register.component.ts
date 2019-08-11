import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  @Output()
  changeType = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

}
