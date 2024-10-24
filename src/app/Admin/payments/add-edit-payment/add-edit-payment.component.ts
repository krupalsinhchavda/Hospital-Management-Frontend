import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
declare var Razorpay: any;

@Component({
  selector: 'app-add-edit-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './add-edit-payment.component.html',
  styleUrl: './add-edit-payment.component.css'
})
export class AddEditPaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  patients: string[] = ['John Doe', 'Jane Roe', 'Sam Smith'];
  doctors: string[] = ['Dr. Smith', 'Dr. Adams', 'Dr. Blake'];
  invoiceItems = [{}]; // Initialize with one empty item

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      caseNo: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  calculateTotals() {
    const items = this.paymentForm.get('items')?.value; // Assuming items is a FormArray
    let total = 0;
    let tax = 0; // Assuming a tax rate
    items.forEach((item: { unitCost: number; quantity: number; }) => {
      const amount = item.unitCost * item.quantity;
      total += amount;
    });
    tax = total * 0.1; // Example tax calculation
    const grandTotal = total + tax;

    // Update total fields in the form
    this.paymentForm.patchValue({
      total,
      tax,
      grandTotal
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
}
