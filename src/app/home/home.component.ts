import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SupabaseAuthService} from '../services/supabase-auth.service';
import {User} from "@supabase/supabase-js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private supabase: SupabaseAuthService,
              private router: Router) {
  }

  user: User

  ngOnInit(): void {
    this.user = this.supabase.user;
  }

  async onSignOutButtonClick() {
    const {error} = await this.supabase.signOut();
    if (error) {
      alert('Sign out failed, please try again.');
      return;
    }
    this.router.navigate(['/sign-in']);
  }


}
