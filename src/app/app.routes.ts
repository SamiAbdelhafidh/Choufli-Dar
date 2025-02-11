import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from './layouts/layouts.module';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {path:'',component:FrontLayoutComponent,children:[
        {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
        {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)}
    ]},
    {path:'admin',component:AdminLayoutComponent,children:[
        {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)} 
    ]}
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

