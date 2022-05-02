import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseAuthService } from '../services/supabase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  isLoading: boolean = false;

  constructor(private supabase: SupabaseAuthService, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignUpButtonClick() {
    this.router.navigate(['/sign-up']);
  }

  async onSignInButtonClick() {
    try {
      this.isLoading = true;
      const { user, session, error } = await this.supabase.signIn(
        this.signInForm.value.email,
        this.signInForm.value.password
      );
      if (error) {
        alert('Login failed, please try again.');
        throw error;
      }
      this.router.navigate(['/home']);
    } catch (error) {
      alert(error.message);
    } finally {
      this.isLoading = false;
    }
  }

  async onGitHubSignInButtonClick() {
    try {
      this.isLoading = true;
      const { user, session, error } = await this.supabase.signInWithGitHub();
      if (error) {
        alert('Login failed, please try again.');
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
