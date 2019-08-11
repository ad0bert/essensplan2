import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  type: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
    this.type = data;
  }

  ngOnInit() {
  }

  onChangeType(type: string) {
    this.type = type;
  }
}
