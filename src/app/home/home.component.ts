import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private supabase: SupabaseService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.supabase.user);
    console.log(this.supabase.session);
  }

  async onSignOutButtonClick(){
    const { error} = await this.supabase.signOut();
    if (error) {
      alert('Sign out failed, please try again.');
      return;
    }
    this.router.navigate(['/sign-in']);
  }
}
