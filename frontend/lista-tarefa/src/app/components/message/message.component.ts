import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  inputData: string = '';

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: string,
    private ref:MatDialogRef<MessageComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;
  }

  goback() {
    this.ref.close();
  }

}
