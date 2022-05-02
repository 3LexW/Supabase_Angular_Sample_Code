import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = new SupabaseClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signIn({ email: email, password: password });
  }

  signInWithGitHub() {
    return this.supabase.auth.signIn(
      { provider: 'github' },
      { redirectTo: 'http://localhost:4200/home' }
    );
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({ email: email, password: password });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    this.supabase.auth.onAuthStateChange(callback);
  }
}
