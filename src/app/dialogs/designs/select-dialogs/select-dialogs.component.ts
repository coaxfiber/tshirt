import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-select-dialogs',
  templateUrl: './select-dialogs.component.html',
  styleUrls: ['./select-dialogs.component.css']
})
export class SelectDialogsComponent implements OnInit {

 constructor(public dialogRef: MatDialogRef<SelectDialogsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  	console.log(this.data)
  }


  close(){
       this.dialogRef.close({result:'cancel'}); 
  }

  select(){
       this.dialogRef.close({result:this.data.selected}); 
  }

  next(){
  	if (this.data.selected==69) {
  		this.data.selected=69
  	}else
  		this.data.selected=this.data.selected+1
  }
  pre(){

  	if (this.data.selected==1) {
  		this.data.selected=1
  	}else
  		this.data.selected=this.data.selected-1
  }

}
