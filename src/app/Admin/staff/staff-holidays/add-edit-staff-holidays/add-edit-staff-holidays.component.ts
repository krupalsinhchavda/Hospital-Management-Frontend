import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-staff-holidays',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule, MatDialogModule],
  templateUrl: './add-edit-staff-holidays.component.html',
  styleUrl: './add-edit-staff-holidays.component.css'
})
export class AddEditStaffHolidaysComponent implements OnInit {
  holidayForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditStaffHolidaysComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.holidayForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      day: ['', Validators.required],
      description: ['', Validators.required],
    });

    // If editing, populate the form with existing data
    if (data) {
      this.holidayForm.patchValue(data);
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.holidayForm.valid) {
      // Handle form submission logic
      const holidayData = this.holidayForm.value;
      console.log('Submitted Data:', holidayData);
      this.dialogRef.close(holidayData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
