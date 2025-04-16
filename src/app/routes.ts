import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { RegAdminLayoutComponent } from './layouts/reg-admin-layout/reg-admin-layout.component';
import { NotAuthGuard } from './service/notauth.service';
import { AuthGuard } from './service/auth.service';


export const routes: Routes = [
    {
        path: '', component: FrontLayoutComponent, children: [
            { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
            { path: 'loginn', loadChildren: () => import('./views/front/loginn/loginn.module').then(m => m.LoginnModule), canActivate: [NotAuthGuard] },
            { path: 'pay', loadChildren: () => import('./views/front/pay/pay.module').then(m => m.PayModule),canActivate: [AuthGuard] },
            { path: 'loginprp', loadChildren: () => import('./views/front/loginprp/loginprp.module').then(m => m.LoginprpModule),canActivate: [AuthGuard] },
            { path: 'about', loadChildren: () => import('./views/front/about/about.module').then(m => m.AboutModule),canActivate: [AuthGuard] },
            { path: 'house', loadChildren: () => import('./views/front/house/house.module').then(m => m.HouseModule) ,canActivate: [NotAuthGuard]},
            { path: 'proprietaire', loadChildren: () => import('./views/front/proprietaire/proprietaire.module').then(m => m.ProprietaireModule),canActivate: [AuthGuard] },
            { path: 'binom', loadChildren: () => import('./views/front/binom/binom.module').then(m => m.BinomModule),canActivate: [AuthGuard] },
            { path: 'contactt', loadChildren: () => import('./views/front/contactt/contactt.module').then(m => m.ContacttModule),canActivate: [AuthGuard] },
            { path: 'register', loadChildren: () => import('./views/front/register/register.module').then(m => m.RegisterModule),canActivate: [AuthGuard] },
            { path: 'profile', loadChildren: () => import('./views/front/profile/profile.module').then(m => m.ProfileModule),canActivate: [AuthGuard] },
            { path: 'binommain', loadChildren: () => import('./views/front/binommain/binommain.module').then(m => m.BinommainModule),canActivate: [AuthGuard] },
            { path: 'sign', loadChildren: () => import('./views/front/sign/sign.module').then(m => m.SignModule), canActivate: [NotAuthGuard], },
            { path: 'main', loadChildren: () => import('./views/front/main/main.module').then(m => m.MainModule),canActivate: [AuthGuard] },
            { path: 'btcont', loadChildren: () => import('./views/front/btcont/btcont.module').then(m => m.BtcontModule),canActivate: [AuthGuard] }
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
