import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-appointment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-appointment.component.html',
  styleUrl: './add-edit-appointment.component.css'
})
export class AddEditAppointmentComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
      doctor: [''],
      treatment: [''],
      notes: [''],
      avatar: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      // Handle form submission
    }
  }
}