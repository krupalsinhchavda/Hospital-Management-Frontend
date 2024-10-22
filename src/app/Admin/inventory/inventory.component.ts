import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
interface Stock {
  itemName: string;
  category: string;
  quantity: number;
  date: string;
  price: number;
  details: string;
}
@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {
  stocks: Stock[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize the list of stocks (you can fetch this data from an API later)
    this.stocks = [
      {
        itemName: 'Paracetamol',
        category: 'Medicine',
        quantity: 100,
        date: '2024-10-10',
        price: 50,
        details: '500mg Tablets'
      },
      {
        itemName: 'Amoxicillin',
        category: 'Antibiotics',
        quantity: 50,
        date: '2024-09-20',
        price: 120,
        details: '250mg Capsules'
      }
    ];
  }

  editStock(stock: Stock): void {
    console.log('Editing stock:', stock);
    // Implement edit logic here
  }

  deleteStock(stock: Stock): void {
    const index = this.stocks.indexOf(stock);
    if (index > -1) {
      this.stocks.splice(index, 1);
    }
    console.log('Deleted stock:', stock);
  }
}
