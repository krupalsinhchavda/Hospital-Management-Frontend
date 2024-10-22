import { Routes } from "@angular/router";
import { InventoryComponent } from "./inventory.component";
import { AddEditInventoryComponent } from "./add-edit-inventory/add-edit-inventory.component";

export const InventoryRoutingModule: Routes = [
  { path: '', component: InventoryComponent, pathMatch: 'full' },
  { path: 'add-inventory', component: AddEditInventoryComponent, pathMatch: 'full' },
  { path: 'edit-inventory/:id', component: AddEditInventoryComponent, pathMatch: 'full' },
]