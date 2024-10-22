import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Medicine {
  medicineNumber: string;
  medicineName: string;
  category: string;
  company: string;
  purchaseDate: string;
  price: number;
  expiryDate: string;
  stock: number;
}

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent implements OnInit {
  medicines: Medicine[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize the list of medicines (this can later be fetched from an API)
    this.medicines = [
      {
        medicineNumber: 'MD001',
        medicineName: 'Paracetamol',
        category: 'Pain Relief',
        company: 'PharmaCorp',
        purchaseDate: '2024-10-01',
        price: 5.00,
        expiryDate: '2025-12-01',
        stock: 100
      },
      {
        medicineNumber: 'MD002',
        medicineName: 'Amoxicillin',
        category: 'Antibiotics',
        company: 'HealthPlus',
        purchaseDate: '2024-09-15',
        price: 12.50,
        expiryDate: '2026-01-01',
        stock: 50
      }
    ];
  }

  // Add any methods to handle editing and deleting medicines
  editMedicine(medicine: Medicine): void {
    console.log('Editing medicine:', medicine);
    // Implement editing logic here
  }

  deleteMedicine(medicine: Medicine): void {
    const index = this.medicines.indexOf(medicine);
    if (index > -1) {
      this.medicines.splice(index, 1);
    }
    console.log('Deleted medicine:', medicine);
  }
}
