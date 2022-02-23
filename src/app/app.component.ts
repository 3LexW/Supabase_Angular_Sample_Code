import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SupabaseService]
})
export class AppComponent implements OnInit {
  title = 'supabase-angular-auth';

  session = this.supabase.session;
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    this.supabase.authChanges((_, session) => {
      this.session = session;
    });
  }
}
