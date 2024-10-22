import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-staff',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-staff.component.html',
  styleUrl: './add-edit-staff.component.css'
})
export class AddEditStaffComponent implements OnInit {
  staffForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.staffForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      dob: [''],
      address: [''],
      department: ['', Validators.required],
      avatar: [''],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.staffForm.valid) {
      console.log(this.staffForm.value);
      this.router.navigate(['/admin/staff'])

      // Handle the form submission
    } else {
      console.error('Form is invalid');
    }
  }
}
