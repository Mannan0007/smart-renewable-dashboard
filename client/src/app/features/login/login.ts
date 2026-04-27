import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  login() {
    if (this.loginForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const val = this.loginForm.value;
    this.http.post('http://localhost:5000/api/auth/login', {
      email: val.email,
      password: val.password
    }).subscribe({
      next: (res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert('Login failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }
}