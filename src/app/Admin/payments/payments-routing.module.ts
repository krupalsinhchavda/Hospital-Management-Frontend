import { Routes } from "@angular/router";
import { PaymentsComponent } from "./payments.component";

export const PaymentsRoutingModule: Routes = [
  { path: '', component: PaymentsComponent, pathMatch: 'full' },
];