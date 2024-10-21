import { Routes } from "@angular/router";
import { PatientComponent } from "./patient.component";
import { AddEditPatientComponent } from "./add-edit-patient/add-edit-patient.component";

export const PatientRoutingModule: Routes = [
  { path: '', component: PatientComponent, pathMatch: 'full' },
  { path: 'add-patient', component: AddEditPatientComponent, pathMatch: 'full' },
];