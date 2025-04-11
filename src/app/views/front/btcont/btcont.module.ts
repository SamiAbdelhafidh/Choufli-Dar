import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BtcontRoutingModule } from './btcont-routing.module';
import { BtcontComponent } from './btcont/btcont.component';

const routes: Routes = [
  { path: '', component: BtcontComponent }
];
@NgModule({

  imports: [
    CommonModule,
    BtcontRoutingModule,
    RouterModule.forChild(routes),
    BtcontComponent
  ]
})
export class BtcontModule { }
