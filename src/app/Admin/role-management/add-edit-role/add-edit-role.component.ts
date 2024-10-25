import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-role',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './add-edit-role.component.html',
  styleUrl: './add-edit-role.component.css'
})
export class AddEditRoleComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddEditRoleComponent>,) { }
  
  ngOnInit(): void {
  }

}
