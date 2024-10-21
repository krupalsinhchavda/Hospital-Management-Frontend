import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
