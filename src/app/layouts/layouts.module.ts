import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';



@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    AdminLayoutComponent,
    FrontLayoutComponent
  ]
})
export class LayoutsModule { }
