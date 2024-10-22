import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-patient',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-patient.component.html',
  styleUrl: './add-edit-patient.component.css'
})
export class AddEditPatientComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      dob: [''],
      department: ['', Validators.required],
      avatar: [''],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      this.router.navigate(['/admin/patient'])

      // Handle the form submission
    } else {
      console.error('Form is invalid');
    }
  }
}
