import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalvarsService } from './globalvars.service';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { SimpleDialogsComponent } from './dialogs/simple-dialogs/simple-dialogs.component';
import { DesignsComponent } from './dialogs/designs/designs.component';
import { SelectDialogsComponent } from './dialogs/designs/select-dialogs/select-dialogs.component';
import { BackgroundComponent } from './dialogs/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SimpleDialogsComponent,
    DesignsComponent,
    SelectDialogsComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ColorPickerModule,
  ],
  entryComponents: [
    SimpleDialogsComponent,
    DesignsComponent,
    SelectDialogsComponent,
    BackgroundComponent
  ],
  providers: [GlobalvarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
