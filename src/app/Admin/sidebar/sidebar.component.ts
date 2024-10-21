import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateTo(route: string): void {
    // Implement any additional logic before navigation if needed
    this.router.navigate([route]);
  }
}
