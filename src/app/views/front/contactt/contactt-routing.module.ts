import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacttComponent } from './contactt/contactt.component';

const routes: Routes = [
  {path:'',component:ContacttComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContacttRoutingModule { }
