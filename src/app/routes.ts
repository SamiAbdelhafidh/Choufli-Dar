import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { RegAdminLayoutComponent } from './layouts/reg-admin-layout/reg-admin-layout.component';


export const routes: Routes = [
    {
        path: '', component: FrontLayoutComponent, children: [
            { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
            { path: 'loginuser', loadChildren: () => import('./views/front/loginuser/loginuser.module').then(m => m.LoginuserModule) },
            { path: 'about', loadChildren: () => import('./views/front/about/about.module').then(m => m.AboutModule) },
            { path: 'house', loadChildren: () => import('./views/front/house/house.module').then(m => m.HouseModule) },
            { path: 'proprietaire', loadChildren: () => import('./views/front/proprietaire/proprietaire.module').then(m => m.ProprietaireModule) },
            { path: 'binom', loadChildren: () => import('./views/front/binom/binom.module').then(m => m.BinomModule) },
            { path: 'contact', loadChildren: () => import('./views/front/contact/contact.module').then(m => m.ContactModule) },
            { path: 'register', loadChildren: () => import('./views/front/register/register.module').then(m => m.RegisterModule) },
            { path: 'profile', loadChildren: () => import('./views/front/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'binommain', loadChildren: () => import('./views/front/binommain/binommain.module').then(m => m.BinommainModule) }
        ]
    },
    {
        path: 'admin', component: AdminLayoutComponent, children: [
            { path: '', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'allstudents', loadChildren: () => import('./views/admin/allstudents/allstudents.module').then(m => m.AllstudentsModule) },
            { path: 'loginadmin', loadChildren: () => import('./views/admin/loginadmin/loginadmin.module').then(m => m.LoginadminModule) }
        ]
    },
    { path: 'admin/loginuser', component: AuthAdminLayoutComponent },
    { path: 'admin/reg', component: RegAdminLayoutComponent }
];
