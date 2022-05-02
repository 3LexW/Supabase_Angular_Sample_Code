import { Component, OnInit } from '@angular/core';
import {SupabaseFunctionService} from "../services/supabase-function.service";
import {MatDialog} from "@angular/material/dialog";
import {Category} from "../model/Category";
import {NewCategoryForm} from "../model/form/NewCategoryForm";
import {NewCategoryFormComponent} from "./new-category-form/new-category-form.component";

@Component({
  selector: 'app-categories',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Array<Category>;
  loading: boolean = false;

  constructor(private supabaseFunction: SupabaseFunctionService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    try {
      this.loading = true;
      let {data, error} = await this.supabaseFunction.categories;
      if (error) {
        throw error;
      }

      if (data) {
        this.categories = data;
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      this.loading = false;
    }
  }

  showNewCategoryForm(): void {
    let f: NewCategoryForm = {name: "", color_code: ""};
    let dialogRef = this.dialog.open(
      NewCategoryFormComponent,
      {
        data: f,
      }
    )

    dialogRef.afterClosed().subscribe(resultForm => {
      this.createCategory(resultForm);
    })
  }

  async createCategory(f: NewCategoryForm) {
    try {
      this.loading = true;
      let {data, error} = await this.supabaseFunction.createCategory(f);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      this.getCategories();
    }
  }

}
