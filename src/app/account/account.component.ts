import {Component, OnInit} from '@angular/core';
import {SupabaseFunctionService} from "../services/supabase-function.service";
import {NewAccountForm} from "../model/form/NewAccountForm";
import {Account} from "../model/Account";
import {MatDialog} from "@angular/material/dialog";
import {NewAccountFormComponent} from "./new-account-form/new-account-form.component";

@Component({
  selector: 'app-account-base',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts: Array<Account>;
  loading: boolean = false;

  constructor(private supabaseFunction: SupabaseFunctionService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAccount();
  }

  async getAccount() {
    try {
      this.loading = true;
      let {data: accounts, error} = await this.supabaseFunction.accounts;
      if (error) {
        throw error;
      }

      if (accounts) {
        this.accounts = accounts;
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      this.loading = false;
    }
  }

  showNewAccountForm() {
    let f: NewAccountForm = {name: "", beginningBal: 0};
    let dialogRef = this.dialog.open(
      NewAccountFormComponent,
      {
        data: f,
      }
    )

    dialogRef.afterClosed().subscribe(resultForm => {
      this.createAccount(resultForm);
    })
  }

  async createAccount(f: NewAccountForm) {
    try {
      this.loading = true;
      let {data, error} = await this.supabaseFunction.createAccount(f);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      this.getAccount();
    }
  }

}
