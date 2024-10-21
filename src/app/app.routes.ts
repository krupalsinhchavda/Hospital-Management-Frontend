import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login', pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./Account/account-routing.module').then(m => m.AccountRoutingModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./Admin/admin-routing.module').then(m => m.AdminRoutingModule)
    },
];
