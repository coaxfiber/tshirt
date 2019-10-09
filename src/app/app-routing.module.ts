import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignsComponent } from './dialogs/designs/designs.component';

const routes: Routes = [
  {
    path: 'designs',
    component: DesignsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
