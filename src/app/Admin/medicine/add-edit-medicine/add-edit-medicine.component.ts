import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-medicine',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-medicine.component.html',
  styleUrl: './add-edit-medicine.component.css'
})
export class AddEditMedicineComponent implements OnInit {
  medicineForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.medicineForm = this.formBuilder.group({
      medicineNumber: ['', Validators.required],
      medicineName: ['', Validators.required],
      category: ['', Validators.required],
      company: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      expiryDate: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.medicineForm.valid) {
      const medicineData = this.medicineForm.value;
      console.log('Medicine Data Submitted: ', medicineData);
      // Handle the form submission (e.g., send data to backend)
    }
  }
}