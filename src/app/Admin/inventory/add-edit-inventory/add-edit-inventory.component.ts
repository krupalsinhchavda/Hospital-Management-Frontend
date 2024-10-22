import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-inventory',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-edit-inventory.component.html',
  styleUrl: './add-edit-inventory.component.css'
})
export class AddEditInventoryComponent implements OnInit {
  stockForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      details: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.stockForm.valid) {
      const newStock = this.stockForm.value;
      console.log('Stock Added: ', newStock);
      // Handle form submission (e.g., send data to the backend or update list)
    }
  }
}
