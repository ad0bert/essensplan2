import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  type: string;

  constructor(
    private dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.type = data;
  }

  ngOnInit() {
  }

  onChangeType(type: string) {
    this.type = type;
  }

  onDialogClose(doClose: boolean) {
    if (doClose) {
      this.dialogRef.close();
    }
  }

}
