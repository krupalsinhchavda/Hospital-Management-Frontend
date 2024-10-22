import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-doctor.component.html',
  styleUrl: './add-edit-doctor.component.css'
})
export class AddEditDoctorComponent implements OnInit {
  public doctorForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.doctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      dob: ['', Validators.required],
      education: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      biography: ['', Validators.required],
      avatar: [null,],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  public onSubmit(): void {
    if (this.doctorForm.valid) {
      console.log(this.doctorForm.value);
      this.router.navigate(['/admin/doctor'])
      // Handle form submission

    } else {
      // Optionally display validation errors
      this.doctorForm.markAllAsTouched(); // Marks all fields as touched to show validation errors
      console.log('Form is not valid');
    }
  }
}