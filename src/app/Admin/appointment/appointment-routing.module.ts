import { Routes } from "@angular/router";
import { AppointmentComponent } from "./appointment.component";
import { AddEditAppointmentComponent } from "./add-edit-appointment/add-edit-appointment.component";

export const AppointmentRoutingModule: Routes = [
  { path: '', component: AppointmentComponent, pathMatch: 'full' },
  { path: 'add-appointment', component: AddEditAppointmentComponent },
  { path: 'edit-appointment/:id', component: AddEditAppointmentComponent },
];