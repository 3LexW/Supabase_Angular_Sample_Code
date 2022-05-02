import { Component, OnInit } from '@angular/core';
import { SupabaseAuthService } from './services/supabase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SupabaseAuthService]
})
export class AppComponent implements OnInit {
  title = 'supabase-angular-auth';

  session = this.supabase.session;
  constructor(private readonly supabase: SupabaseAuthService) {}

  ngOnInit(): void {
    this.supabase.authChanges((_, session) => {
      this.session = session;
    });
  }
}
