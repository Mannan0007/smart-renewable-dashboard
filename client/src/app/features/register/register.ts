import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'] 
})
export class RegisterComponent {
  http = inject(HttpClient);
  router = inject(Router);

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  register() {
    if (this.registerForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const val = this.registerForm.value;
    if (val.password !== val.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.http.post('http://localhost:5000/api/auth/register', {
      name: val.name,
      email: val.email,
      password: val.password
    }).subscribe({
      next: (res: any) => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Registration failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }
}