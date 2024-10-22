import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Authentication/login/login.component';
import { ForgotpasswordComponent } from './Pages/Authentication/forgotpassword/forgotpassword.component';
import { AdmindashboardComponent } from './Pages/AdminDashboard/admindashboard/admindashboard.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'forgotpassword',
        component:ForgotpasswordComponent
    },
    {
        path:'admindashboard',
        component:AdmindashboardComponent
    }

];
