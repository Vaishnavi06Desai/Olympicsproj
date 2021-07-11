import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { NonogramComponent } from './nonogram/nonogram.component';
import { BoardComponent } from './board/board.component';
import { BallsComponent } from './balls/balls.component';
import { GlowpuzzleComponent } from './glowpuzzle/glowpuzzle.component';
import { RoomComponent } from './room/room.component';
import { MiddleComponent } from './middle/middle.component';
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  }
  ,
  {
    path: "nonogram",
    component: NonogramComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "plant",
    component: PlantComponent
  },
  {
    path:"torch",
    component: TorchComponent
  },
  {
    path:"balls",
    component: BallsComponent
  },
  {
    path:"room",
    component: RoomComponent
  },
  {
    path:"middle",
    component: MiddleComponent
  },
  {
    path:"board",
    component: BoardComponent
  },
  {
    path: "puzzle",
    component: PuzzleComponent
  },
  {
    path: "glow",
    component: GlowpuzzleComponent
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
