import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email field with validation
      password: ['', [Validators.required, Validators.minLength(6)]] // Password field with validation
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // Form data
      this.router.navigate(['/admin/dashboard']);
    } else {
      console.log('Form is not valid');
    }
  }
}