import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  public showScrollButton: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateTo(route: string): void {
    // Implement any additional logic before navigation if needed
    this.router.navigate([route]);
  }
  @HostListener('window:scroll', [])
  /**
   * Checks if the window has scrolled more than 100px from the top
   * and updates the showScrollButton flag accordingly.
   * This is used to show/hide the "scroll to top" button.
   */
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 10;
  }

  /**
   * Scrolls the window to the top of the page smoothly.
   * This is used by the "scroll to top" button.
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
