import { Component } from '@angular/core';
import {  ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { SimpleDialogsComponent } from './dialogs/simple-dialogs/simple-dialogs.component';
import { DesignsComponent } from './dialogs/designs/designs.component';
import { BackgroundComponent } from './dialogs/background/background.component';
import { OrdersComponent } from './dialogs/orders/orders.component';

import { DomSanitizer } from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  isize=95

  selected="chi1";

  dragPosition = {x: 5, y: 0};
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


  form: FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput', {static: true}) fileInput: ElementRef;

   createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }
  error=''
  imagebase64 =undefined
  maindoclabel="Choose a file";
  onFileChange(event) {

    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (file.type.includes('image')) {
          this.form.get('avatar').setValue({
            filename: file.name,
            filetype: file.type,
            value: reader.result.toString().split(',')[1]
          })
          if (this.form.value.avatar!=null) {
           this.imagebase64=this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;charset=utf-8;base64,'+this.form.value.avatar.value)
           
            this.maindoclabel = file.name;
          }else{
            this.maindoclabel = "Choose a file";
          }this.error=''
        }else{
          this.error = "Invalid Image Type";
        }
      };
    }
   
  }

  clearFile() {
    this.imagebase64 = undefined
    this.maindoclabel = "Choose a file";
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.error=''
  }

  constructor(private domSanitizer: DomSanitizer, private fb: FormBuilder,public dialog: MatDialog){
    this.size = 235;
    this.createForm()
    setTimeout(console.log.bind(console, '%cStop!', 'color: red;font-size:75px;font-weight:bold;-webkit-text-stroke: 1px black;'), 0);
    setTimeout(console.log.bind(console, '%cThis is a browser feature intended for developers.', 'color: black;font-size:20px;'), 0);
    
  }

   openDialog(x): void {
     if (this.maindoclabel=='Choose a file') {
        const dialogRef = this.dialog.open(SimpleDialogsComponent, {
          width: '750px',
          data: { x: x, d:this.design}
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
     }else {
        const dialogRef = this.dialog.open(SimpleDialogsComponent, {
          width: '750px',
          data: { x: x, d:this.imagebase64}
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
     }
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
tshirtsize=''
error2=''
openDialogOrder(): void {
  this.error2=''
  var x=''
  if (this.tshirtsize=='') {
    x=x+"*Size of the t-shirt is required"
  }

  this.error2 = x;
  if (x=='') {
    var im=''
    if (this.form.value.avatar==null) {
      // code...
    }else
      im = this.form.value.avatar.value
      const dialogRef = this.dialog.open(OrdersComponent, {
        width: '750px',data:{ 
          tshirtsize:this.tshirtsize,
          label:this.maindoclabel,
          design:this.design, 
          base64:im,
          addtext:this.textadd,
          text:this.text,
          textsize: this.textsize,
          textcolor:this.textcolor,
          textstroke:this.textstroke,
          textstyle:this.textstyle,
          textweight:this.textweight,
          textfamily:this.textfamily,
          dragposition:this.dragPosition,
          bg:this.bg,
          canvasposition:this.updown,
           }, disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result!=undefined) {
          if (result.result!='cancel') {

          }
        }
      });
      // code...
    }
  }

  design = "assets/design/onepiece/2.png"
   openDialogDesign(): void {
    const dialogRef = this.dialog.open(DesignsComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result!=undefined) {
        if (result.result!='cancel') {
          this.design = result.result
          this.clearFile()
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
  	this.size = this.isize*2.54;
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
