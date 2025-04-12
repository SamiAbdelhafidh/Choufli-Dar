import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginprpComponent } from './loginprp/loginprp.component';

const routes: Routes = [{path:'',component:LoginprpComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginprpRoutingModule { }
