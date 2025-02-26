import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    RegisterComponent
  ]
})
export class RegisterModule { }
