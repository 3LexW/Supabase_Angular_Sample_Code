import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [HomeGuard] },
  { path: '**', redirectTo: 'sign-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
