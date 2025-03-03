import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginuserRoutingModule } from './loginuser-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LoginuserRoutingModule,
    LoginuserComponent
    
  ]
})
export class LoginuserModule { }
