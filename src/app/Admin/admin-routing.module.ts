import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

export const AdminRoutingModule: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirect to 'dashboard' when the path is empty
      { path: 'dashboard', component: DashboardComponent },
      { path: 'doctor', loadChildren: () => import('./doctor/doctor-routing.module').then(m => m.DoctorRoutingModule) },
      { path: 'patient', loadChildren: () => import('./patient/patient-routing.module').then(m => m.PatientRoutingModule) },
      { path: 'staff', loadChildren: () => import('./staff/staff-routing.module').then(m => m.StaffRoutingModule) },
    ]
  }
]
