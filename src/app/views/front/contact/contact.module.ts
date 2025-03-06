import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { RegisterComponent } from '../register/register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    RegisterComponent
  ]
})
export class ContactModule { }
