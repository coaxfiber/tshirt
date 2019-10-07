import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-simple-dialogs',
  templateUrl: './simple-dialogs.component.html',
  styleUrls: ['./simple-dialogs.component.css']
})
export class SimpleDialogsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SimpleDialogsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }
  close(){
       this.dialogRef.close({result:'cancel'}); 
  }
}
