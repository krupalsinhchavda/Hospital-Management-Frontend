import { Routes } from "@angular/router";
import { AddEditDoctorComponent } from "./add-edit-doctor/add-edit-doctor.component";
import { DoctorComponent } from "./doctor.component";

export const DoctorRoutingModule: Routes = [
  { path: '', component: DoctorComponent, pathMatch: 'full' },
  { path: 'add-doctor', component: AddEditDoctorComponent },
  { path: 'edit-doctor/:id', component: AddEditDoctorComponent },
];