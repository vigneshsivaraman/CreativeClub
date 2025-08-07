import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,MatSnackBarModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private snackBar : MatSnackBar
      ) 
      {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const loginData = this.loginForm.value;

    console.log('Submitting login data:', loginData);

    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);

        if (response?.access_token) {
          localStorage.setItem('token', response.access_token);
          this.router.navigate(['/dashboard']);

          this.snackBar.open('Login completed', 'Close', {
            duration: 3000,
            panelClass: 'snackbar-success'
          });
          
        } else {
          console.error('Login failed: Token missing from response.');
        }

        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Login failed:', error);
        const message = error?.error?.message || 'Login failed';
        this.snackBar.open(message , 'Close', {
          duration: 5000,
          panelClass: 'snackbar-error'
        });
        this.isSubmitting = false;
      }
    });
  }
}
