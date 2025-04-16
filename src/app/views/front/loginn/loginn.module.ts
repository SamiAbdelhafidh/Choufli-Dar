import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginnRoutingModule } from './loginn-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginnRoutingModule
  ]
})
export class LoginnModule { }
