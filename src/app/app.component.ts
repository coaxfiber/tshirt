import { Component } from '@angular/core';
import {  ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { SimpleDialogsComponent } from './dialogs/simple-dialogs/simple-dialogs.component';
import { DesignsComponent } from './dialogs/designs/designs.component';
import { BackgroundComponent } from './dialogs/background/background.component';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aurasystem';
  margintop=140;
  marginleft=180
  size = 100

  updown=0;
  rightleft=0;
  isize=98

  selected="chi1";

  dragPosition = {x: 5, y: 0};
  @ViewChild('siii', {static: true}) elementView: ElementRef;
  contentHeight: number;

  textsize=12;
  textweight='normal';
  textstyle='normal';
  textcolor
  textstroke;
  text='';
  textfamily ="'Times New Roman', Times, serif"

  textdragPosition = {x: 14, y: 0};

  textadd = false

  resettext(){
    this.textdragPosition = {x: 25, y: 20};
  }

  constructor(public dialog: MatDialog){
    this.size = 235;
  }

   openDialog(x): void {
    const dialogRef = this.dialog.open(SimpleDialogsComponent, {
      width: '750px',
      data: { x: x, d:this.design}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  bg=0
   openDialogBg(): void {
    const dialogRef = this.dialog.open(BackgroundComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result!=undefined) {
        if (result.result!='cancel') {
          this.bg = result.result
        }
      }
    });
  }

  design = "onepiece/2"
   openDialogDesign(): void {
    const dialogRef = this.dialog.open(DesignsComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result!=undefined) {
        if (result.result!='cancel') {
          this.design = result.result
        }
      }
    });
  }

  changeselect(select){
  	this.selected = select
  }

  sliderEvent(){
  	this.margintop = 80+((this.updown/100*400));
    //console.log(this.margintop)
  }


  sliderEvent2(){
    this.marginleft = 100+(this.rightleft*2);
  }

  sliderEvent3(){
    this.changePosition()
  	this.size = this.isize*2.5;
    this.contentHeight = this.elementView.nativeElement.offsetHeight;
  }

  changePosition() {
    this.dragPosition = {x:0, y: 0};
    console.log(this.dragPosition)
  }

onDragEnded(event) {
  let element = event.source.getRootElement();
  let boundingClientRect = element.getBoundingClientRect();
  let parentPosition = this.getPosition(element);
  console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        
}

  getPosition(el) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }
}
