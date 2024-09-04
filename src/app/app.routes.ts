import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { authGuard } from './guard/auth.guard';


export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path: 'dashboard',
                component: DashboardComponent,
                
            }
        ]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [authGuard]
    }
    
    
];
