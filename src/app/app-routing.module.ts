import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NonogramComponent } from './nonogram/nonogram.component';
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  }
  ,{
    path: "forgotPassword",
    component: ForgotPasswordComponent
  },
  {
    path: "nonogram",
    component: NonogramComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
