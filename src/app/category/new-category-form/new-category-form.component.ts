import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewCategoryForm} from "../../model/form/NewCategoryForm";

@Component({
  selector: 'app-new-category-form',
  templateUrl: './new-category-form.component.html',
  styleUrls: ['./new-category-form.component.scss']
})
export class NewCategoryFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewCategoryFormComponent>,
              @Inject(MAT_DIALOG_DATA) public f: NewCategoryForm) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //Convert color type to text, such that we can store in database
    if (typeof this.f.color_code !== 'string'){
      this.f.color_code = this.f.color_code.hex;
    }
    this.dialogRef.close(this.f);
  }

}
