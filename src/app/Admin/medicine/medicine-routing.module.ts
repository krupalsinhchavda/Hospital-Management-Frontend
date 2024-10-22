import { Routes } from "@angular/router";
import { MedicineComponent } from "./medicine.component";
import { AddEditMedicineComponent } from "./add-edit-medicine/add-edit-medicine.component";

export const MedicineRoutingModule: Routes = [
  { path: '', component: MedicineComponent, pathMatch: 'full' },
  { path: 'add-medicine', component: AddEditMedicineComponent, pathMatch: 'full' },
  { path: 'edit-medicine/:id', component: AddEditMedicineComponent, pathMatch: 'full' },
]