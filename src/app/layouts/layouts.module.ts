import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';



@NgModule({
  declarations: [
  
    
  ],
  imports: [
    CommonModule,
    AdminLayoutComponent,
    FrontLayoutComponent,
    AuthAdminLayoutComponent,
    RouterModule,
    BrowserAnimationsModule
  ]
})
export class LayoutsModule { }
