import {Injectable} from '@angular/core';
import {SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../environments/environment";
import {NewAccountForm} from "../model/form/NewAccountForm";
import {NewCategoryForm} from "../model/form/NewCategoryForm";

@Injectable({
  providedIn: 'root'
})
export class SupabaseFunctionService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = new SupabaseClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get accounts() {
    return this.supabase
      .from('Account').select()
  }

  get categories() {
    return this.supabase
      .from('Category').select()
  }

  createAccount(newAccount: NewAccountForm) {
    console.log(newAccount);
    return this.supabase
      .from('Account')
      .insert([
        {
          ...newAccount,
          created_by: this.supabase.auth.user().id,
          modified_by: this.supabase.auth.user().id,
        }
      ], {returning: 'minimal'})
  }


  createCategory(newCategory: NewCategoryForm) {
    return this.supabase
      .from('Category')
      .insert([
        {
          ...newCategory,
          created_by: this.supabase.auth.user().id,
          modified_by: this.supabase.auth.user().id,
        }
      ])
  }
}
