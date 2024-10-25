import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Authentication/login/login.component';
import { ForgotpasswordComponent } from './Pages/Authentication/forgotpassword/forgotpassword.component';
import { AdmindashboardComponent } from './Pages/AdminDashboard/admindashboard/admindashboard.component';
import { DashboardComponent } from './Pages/AdminDashboard/Pages/dashboard/dashboard.component';
import { LeaverequestComponent } from './Pages/Students/leaverequest/leaverequest.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch : 'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'forgotpassword',
        component:ForgotpasswordComponent
    },
    // {
    //     path:'admin',
    //     component:AdmindashboardComponent
    // },
    {
        path:'user',
        loadComponent: () => import('./Pages/AdminDashboard/admindashboard/admindashboard.component').then(m => m.AdmindashboardComponent),
        children : [
            {
            path:'dashboard',
            component:DashboardComponent
            },
            {
            path:'studentleave',
            component:LeaverequestComponent
            }
        ]
    }

];
