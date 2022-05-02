import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewAccountForm} from "../../model/form/NewAccountForm";

@Component({
  selector: 'app-new-account-form',
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.scss']
})
export class NewAccountFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewAccountFormComponent>,
              @Inject(MAT_DIALOG_DATA) public f: NewAccountForm) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dialogRef.close(this.f);
  }

}
