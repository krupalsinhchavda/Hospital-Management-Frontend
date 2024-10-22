import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AddEditStaffHolidaysComponent } from './add-edit-staff-holidays/add-edit-staff-holidays.component';

@Component({
  selector: 'app-staff-holidays',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './staff-holidays.component.html',
  styleUrl: './staff-holidays.component.css'
})
export class StaffHolidaysComponent {
  public holidays = [
    { title: 'New Year', date: '01.01.2022', day: 'Sunday', description: 'Common Holiday' },
    { title: 'Pongal', date: '14.01.2022', day: 'Monday', description: 'Religious Holiday' },
    { title: 'Pongal Holiday', date: '15.01.2022', day: 'Monday', description: 'Religious Holiday' },
    { title: 'Tamil New Year', date: '14.04.2022', day: 'Tuesday', description: 'Religious Holiday' },
    { title: 'Good Friday', date: '05.01.2022', day: 'Friday', description: 'Religious Holiday' },
    { title: 'May Day', date: '15.01.2022', day: 'Wednesday', description: 'Common Holiday' },
    { title: 'Ramzan', date: '10.08.2022', day: 'Monday', description: 'Religious Holiday' },
    { title: 'Independence Day', date: '26.01.2022', day: 'Friday', description: 'Common Holiday' },
  ];
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditStaffHolidaysComponent, {
      width: '400px', // Adjust the width as necessary
      data: { /* Pass any data if necessary */ },
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result here if needed
      console.log('Dialog closed', result);
    });
  }
}
