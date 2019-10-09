import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';import { map } from "rxjs/operators";
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  oc=''
  load
  constructor(private snackBar: MatSnackBar,private http: Http,public dialogRef: MatDialogRef<OrdersComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
  	//console.log(this.data)
    var header = new Headers();
             header.append("Accept", "application/json");
             header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
              var design =''
              if (this.data.base64!='') {
                design=''
              }else
                design = this.data.design

              if (this.data.addtext==false) {
                this.data.addtext = ''
                this.data.textsize = ''
                this.data.textcolor = ''
                this.data.textstroke = ''
                this.data.textstyle = ''
                this.data.textweight = ''
                this.data.textfamily = ''
              }

              let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("x1",this.data.tshirtsize);
                    urlSearchParams.append("x2",this.data.label);
                    urlSearchParams.append("x3",design);
                    urlSearchParams.append("x4",this.data.base64);
                    urlSearchParams.append("x5",this.data.addtext);
                    urlSearchParams.append("x6",this.data.text);
                    urlSearchParams.append("x7",this.data.textsize);
                    urlSearchParams.append("x8",this.data.textcolor);
                    urlSearchParams.append("x9",this.data.textstroke);
                    urlSearchParams.append("x10",this.data.textstyle);
                    urlSearchParams.append("x11",this.data.textweight);
                    urlSearchParams.append("x12",this.data.textfamily);
                    urlSearchParams.append("x13",this.data.dragposition.x);
                    urlSearchParams.append("x14",this.data.dragposition.y);
                    urlSearchParams.append("x15",this.data.bg);
                    urlSearchParams.append("x16",this.data.canvasposition);
                    urlSearchParams.append("x17",'0');
                  let body = urlSearchParams.toString()

    this.http.post("http://eltonbagne.info/api/hydra/api.php",body,option)
          .map(response => response.text())
          .subscribe(res => {
            this.load=1
            this.oc = res
          },Error=>{
            alert("Failed. Please Contact HydraPrints.")
            this.closes()
          });
  }
  closes(){
       this.dialogRef.close({result:'cancel'}); 
  }

 copyMessage(val: string){
   this.openSnackBar("Copied to clipboard!",'')
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
   copyMessage2(val: string){
   this.openSnackBar("Copied to clipboard!",'')
    this.copyMessage(val)
    this.closes()
  }
}
