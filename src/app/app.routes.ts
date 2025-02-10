import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from './layouts/layouts.module';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {path:'',component:FrontLayoutComponent},
    {path:'admin',component:AdminLayoutComponent}
];

@NgModule({
    declarations:[
        
    ],
    imports: [RouterModule.forRoot(routes),
        FormsModule,
        BrowserModule,
        LayoutsModule,
        AppComponent

    ],
    providers :[],
    bootstrap:[]
})
export class AppModule { }

