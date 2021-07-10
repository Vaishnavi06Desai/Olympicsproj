import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import firebase from 'firebase/app';
import 'firebase/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from './services/window.service';

import { NonogramComponent } from './nonogram/nonogram.component';
import { HomeComponent } from './home/home.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
import { BoardComponent } from './board/board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { BallsComponent } from './balls/balls.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
<<<<<<< HEAD
    PuzzleComponent,
    NonogramComponent
=======
    PlantComponent,
    TorchComponent,

    NonogramComponent,
    BoardComponent,

    PuzzleComponent,
    NonogramComponent,
    BallsComponent
>>>>>>> 9fd131ecbb3366620f6286ce91777446511ac6df
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
