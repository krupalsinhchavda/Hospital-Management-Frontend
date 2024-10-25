import { Routes } from "@angular/router";
import { RoleManagementComponent } from "./role-management.component";

export const RoleManagementRoutingModule: Routes = [
  { path: '', component: RoleManagementComponent, pathMatch: 'full' },
]
