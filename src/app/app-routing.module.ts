import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "puzzle",
    component: PuzzleComponent
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
