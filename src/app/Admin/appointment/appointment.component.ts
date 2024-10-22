import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments = [
    { name: 'Andrea Lalema', consultingDoctor: 'Dr. Bernardo James', treatment: 'Infertility', mobile: '+12 456890', email: 'example@email.com', date: '01.10.2022', time: '07:30' },
    // Add more appointment data as needed
  ];
}
