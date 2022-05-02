import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseAuthService } from '../services/supabase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private supabase: SupabaseAuthService, private router: Router) {}

  signUpForm: FormGroup;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit() {
    this.isLoading = true;
    try {
      const { user, session, error } = await this.supabase.signUp(
        this.signUpForm.value.email,
        this.signUpForm.value.password
      );
      if (error) {
        alert('Sign up failed, please try again.');
        return;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      this.isLoading = false;
    }
    this.signUpForm.reset();
    alert('Sign up email sent. Please check your email box.');
    this.router.navigate(['/sign-in']);
  }
}
