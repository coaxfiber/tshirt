import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SelectDialogsComponent } from './select-dialogs/select-dialogs.component';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

	folder = 0;
  array = []
  item
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<DesignsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }
  close(){
       this.dialogRef.close({result:'cancel'}); 
  }
  setnumber(x){
    this.array=[]
    for (var i = 0; i < x; ++i) { // array for onepiece
     this.array.push(i+1)
    }
    this.item=x
  }
  design
  setfolder(x,desc,set)
  {
    this.setnumber(set)
    this.design = desc
  	this.folder = x;
  }


   viewselect(selected): void {
    const dialogRef = this.dialog.open(SelectDialogsComponent, {
      width: '650px' , data: {selected:selected,length:this.array.length,folder:this.design}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result!=undefined) {
        if (result.result!='cancel') {
          console.log(this.design)
           this.dialogRef.close({result:'assets/design/'+this.design+"/"+result.result+".png"}); 
        }
      }
    });
  }
}
