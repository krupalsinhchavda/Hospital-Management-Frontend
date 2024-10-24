import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditPaymentDialogComponent } from './add-edit-payment-dialog/add-edit-payment-dialog.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {
  payments = [
    { patientName: 'John Doe', doctorName: 'Dr. Smith', caseNo: 'C123', date: '2024-10-24', amount: 1500, details: 'Consultation', status: 'Success' },
    { patientName: 'Jane Doe', doctorName: 'Dr. Adams', caseNo: 'C124', date: '2024-10-23', amount: 2000, details: 'Surgery', status: 'Pending' },
    { patientName: 'Sam Roe', doctorName: 'Dr. Blake', caseNo: 'C125', date: '2024-10-22', amount: 3000, details: 'Checkup', status: 'Failed' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openAddPaymentDialog(): void {
    const dialogRef = this.dialog.open(AddEditPaymentDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.payments.push({
          patientName: result.patientName,
          doctorName: result.doctorName,
          caseNo: result.caseNo,
          date: new Date().toISOString().split('T')[0], // set current date
          amount: result.amount,
          details: 'N/A', // Add any default details here
          status: 'Pending' // Set the default status
        });
      }
    });
  }

  editPayment(payment: any): void {
    console.log('Edit payment:', payment);
    // Implement edit logic
  }

  deletePayment(payment: any): void {
    console.log('Delete payment:', payment);
    // Implement delete logic
  }

  // Function to return the CSS class for different status values
  getStatusClass(status: string): string {
    switch (status) {
      case 'Success':
        return 'badge bg-success';
      case 'Pending':
        return 'badge bg-warning';
      case 'Failed':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}
