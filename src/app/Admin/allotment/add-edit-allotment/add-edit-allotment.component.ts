import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-allotment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-allotment.component.html',
  styleUrl: './add-edit-allotment.component.css'
})
export class AddEditAllotmentComponent implements OnInit {
  allotmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form group with required form controls
    this.allotmentForm = this.formBuilder.group({
      roomNo: ['', Validators.required],
      patientName: ['', Validators.required],
      roomType: ['', Validators.required],
      admissionDate: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      doctorAssigned: ['', Validators.required],
      status: ['', Validators.required],
      amountCharged: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.allotmentForm.valid) {
      const newAllotment = this.allotmentForm.value;
      console.log('Allotment Added:', newAllotment);
      // Handle form submission: save allotment data (e.g., send it to the backend)
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.allotmentForm.reset();
  }
}