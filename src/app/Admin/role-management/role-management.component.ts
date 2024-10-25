import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AddEditRoleComponent } from './add-edit-role/add-edit-role.component';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.css'
})
export class RoleManagementComponent implements OnInit {

  constructor(private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  /*
  *Add Role Dialog
   */
  public openAddDialog(Data: string): void {
    const dialogRef = this.dialog.open(AddEditRoleComponent, {
      data: Data,
      width: '280px',
      height: '100%',
      position: {
        right: '0',
        top: '0'
      },
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
