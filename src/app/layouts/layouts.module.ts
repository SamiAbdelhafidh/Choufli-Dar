import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    AdminLayoutComponent,
    FrontLayoutComponent,
    RouterModule
  ]
})
export class LayoutsModule { }
