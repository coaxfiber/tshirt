import { Component } from '@angular/core';
import {  ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aurasystem';
  margintop=110;
  marginleft=130
  size = 100

  updown=0;
  rightleft=0;
  isize=0

  selected="chi1";

  dragPosition = {x: 0, y: 0};
  @ViewChild('siii', {static: true}) elementView: ElementRef;
  contentHeight: number;

  textsize=12;
  textweight='normal';
  textstyle='normal';
  textcolor
  textstroke;
  text='';
  textfamily ="'Times New Roman', Times, serif"

  textdragPosition = {x: 0, y: 0};

  textadd = false

  resettext(){
    this.textdragPosition = {x: 0, y: 0};
  }

  constructor(){
  }

  changeselect(select){
  	this.selected = select
  }

  sliderEvent(){
  	this.margintop = 80+((this.updown/100*312));
    //console.log(this.margintop)
  }


  sliderEvent2(){
    this.marginleft = 100+(this.rightleft*2);
  }

  sliderEvent3(){
    this.changePosition()

  	this.size = 100+(this.isize/100*77);
    //console.log(this.size)
    this.contentHeight = this.elementView.nativeElement.offsetHeight;

    //console.log(this.contentHeight)
    if(this.contentHeight>177||this.size>250){
      alert('Image size is too big')
    }
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
