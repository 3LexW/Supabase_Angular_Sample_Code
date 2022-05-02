import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AccountComponent} from './account/account.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NewAccountFormComponent} from './account/new-account-form/new-account-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CategoryComponent} from './category/category.component';
import {NewCategoryFormComponent} from './category/new-category-form/new-category-form.component';
import {
  MAT_COLOR_FORMATS,
  NGX_MAT_COLOR_FORMATS,
  NgxMatColorPickerModule
} from "@angular-material-components/color-picker";

@NgModule({
  declarations: [AppComponent, SignInComponent, SignUpComponent, HomeComponent, AccountComponent, NewAccountFormComponent, CategoryComponent, NewCategoryFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    NgxMatColorPickerModule
  ],
  providers: [
    {provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
