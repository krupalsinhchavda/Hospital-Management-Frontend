import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
interface Allotment {
  roomNo: string;
  patientName: string;
  roomType: string;
  admissionDate: string;
  gender: string;
  mobile: string;
  doctorAssigned: string;
  status: string;
  amountCharged: number;
}

@Component({
  selector: 'app-allotment',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './allotment.component.html',
  styleUrl: './allotment.component.css'
})
export class AllotmentComponent implements OnInit {
  allotments: Allotment[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize the list of allotments
    this.allotments = [
      {
        roomNo: '101',
        patientName: 'John Doe',
        roomType: 'Private',
        admissionDate: '2024-10-10',
        gender: 'Male',
        mobile: '1234567890',
        doctorAssigned: 'Dr. Smith',
        status: 'Admitted',
        amountCharged: 1500
      },
      {
        roomNo: '202',
        patientName: 'Jane Doe',
        roomType: 'Semi-Private',
        admissionDate: '2024-10-11',
        gender: 'Female',
        mobile: '9876543210',
        doctorAssigned: 'Dr. Brown',
        status: 'Discharged',
        amountCharged: 1200
      }
    ];
  }

  editAllotment(allotment: Allotment): void {
    console.log('Editing allotment:', allotment);
    // Implement edit logic here
  }

  deleteAllotment(allotment: Allotment): void {
    const index = this.allotments.indexOf(allotment);
    if (index > -1) {
      this.allotments.splice(index, 1);
    }
    console.log('Deleted allotment:', allotment);
  }
}