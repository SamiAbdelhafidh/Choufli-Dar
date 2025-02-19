import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
const routes: Routes = [
  {path:'',component:ProprietaireComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietaireRoutingModule { }
