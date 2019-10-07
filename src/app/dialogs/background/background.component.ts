import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  
  folder = 0;
  array = []

  constructor(public dialogRef: MatDialogRef<BackgroundComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
       this.setnumber(5)
  }
  close(){
       this.dialogRef.close({result:'cancel'}); 
  }
  viewselect(x){
       this.dialogRef.close({result:x}); 
  }

  setnumber(x){
    this.array=[]
    for (var i = 0; i < x; ++i) { // array for onepiece
     this.array.push(i+1)
    }
    console.log(this.array)
  }
}
