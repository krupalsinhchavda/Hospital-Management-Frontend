import { Routes } from "@angular/router";
import { PaymentsComponent } from "./payments.component";
import { AddEditPaymentComponent } from "./add-edit-payment/add-edit-payment.component";

export const PaymentsRoutingModule: Routes = [
  { path: '', component: PaymentsComponent, pathMatch: 'full' },
  { path: 'add-payment', component: AddEditPaymentComponent, pathMatch: 'full' },
  { path: 'edit-payment/:id', component: AddEditPaymentComponent, pathMatch: 'full' },
];