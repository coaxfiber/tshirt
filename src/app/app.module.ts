import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalvarsService } from './globalvars.service';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { SimpleDialogsComponent } from './dialogs/simple-dialogs/simple-dialogs.component';
import { DesignsComponent } from './dialogs/designs/designs.component';
import { SelectDialogsComponent } from './dialogs/designs/select-dialogs/select-dialogs.component';
import { BackgroundComponent } from './dialogs/background/background.component';
import { OrdersComponent } from './dialogs/orders/orders.component';

import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    SimpleDialogsComponent,
    DesignsComponent,
    SelectDialogsComponent,
    BackgroundComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ColorPickerModule,HttpModule
  ],
  entryComponents: [
    SimpleDialogsComponent,
    DesignsComponent,
    SelectDialogsComponent,
    BackgroundComponent,
    OrdersComponent
  ],
  providers: [GlobalvarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
