import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      { path: 'appointments', loadChildren: () => import('./appointment/appointment-routing.module').then(m => m.AppointmentRoutingModule) },
      { path: 'medicine', loadChildren: () => import('./medicine/medicine-routing.module').then(m => m.MedicineRoutingModule) },
      { path: 'inventory', loadChildren: () => import('./inventory/inventory-routing.module').then(m => m.InventoryRoutingModule) },
      { path: 'allotment', loadChildren: () => import('./allotment/allotment-routing.module').then(m => m.AllotmentRoutingModule) },
    ]
  }
]
