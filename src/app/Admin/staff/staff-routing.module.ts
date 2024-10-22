import { Routes } from "@angular/router";
import { AddEditStaffComponent } from "./add-edit-staff/add-edit-staff.component";
import { StaffHolidaysComponent } from "./staff-holidays/staff-holidays.component";
import { StaffLeavesComponent } from "./staff-leaves/staff-leaves.component";
import { StaffComponent } from "./staff.component";

export const StaffRoutingModule: Routes = [
  { path: '', component: StaffComponent, pathMatch: 'full' },
  { path: 'add-staff', component: AddEditStaffComponent },
  { path: 'edit-staff/:id', component: AddEditStaffComponent },
  { path: 'staff-leaves', component: StaffLeavesComponent },
  { path: 'staff-holidays', component: StaffHolidaysComponent },
];