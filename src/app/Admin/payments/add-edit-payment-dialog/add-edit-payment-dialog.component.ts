import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
declare var Razorpay: any;

@Component({
  selector: 'app-add-edit-payment-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './add-edit-payment-dialog.component.html',
  styleUrl: './add-edit-payment-dialog.component.css'
})
export class AddEditPaymentDialogComponent implements OnInit {
  paymentForm!: FormGroup;
  patients: string[] = ['John Doe', 'Jane Roe', 'Sam Smith'];
  doctors: string[] = ['Dr. Smith', 'Dr. Adams', 'Dr. Blake'];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddEditPaymentDialogComponent>) {
  }
  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      caseNo: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      console.log('Payment Data:', paymentData);

      // Initialize Razorpay
      const options = {
        key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay Key
        amount: paymentData.amount * 100, // Razorpay works with paisa (1 INR = 100 paisa)
        currency: 'INR',
        name: 'Hospital Name', // Replace with your hospital's name
        description: `Payment for Case No: ${paymentData.caseNo}`,
        handler: (response: any) => {
          console.log('Payment successful:', response);
          // Implement success action (e.g., store payment details in your backend)
        },
        prefill: {
          name: paymentData.patientName,
          contact: 'Patient Contact Number', // Add patient contact if available
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    }
  }
  // Method to close the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }
}