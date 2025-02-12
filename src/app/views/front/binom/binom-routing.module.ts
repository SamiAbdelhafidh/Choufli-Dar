import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinomComponent } from './binom/binom.component';

const routes: Routes = [
  {path:'',component:BinomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinomRoutingModule { }
