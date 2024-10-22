import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './Admin/common/page-not-found/page-not-found.component';

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
    { path: '**', component: PageNotFoundComponent },
];
