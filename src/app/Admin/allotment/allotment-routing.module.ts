import { Routes } from "@angular/router";
import { AddEditAllotmentComponent } from "./add-edit-allotment/add-edit-allotment.component";
import { AllotmentComponent } from "./allotment.component";

export const AllotmentRoutingModule: Routes = [
  { path: '', component: AllotmentComponent, pathMatch: 'full' },
  { path: 'add-allotment', component: AddEditAllotmentComponent },
  { path: 'edit-allotment/:id', component: AddEditAllotmentComponent },
];