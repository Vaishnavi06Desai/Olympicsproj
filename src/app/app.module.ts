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
import { DragDropModule} from '@angular/cdk/drag-drop';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { NonogramComponent } from './nonogram/nonogram.component';
import { HomeComponent } from './home/home.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
import { BoardComponent } from './board/board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { BallsComponent } from './balls/balls.component';
import { GlowpuzzleComponent } from './glowpuzzle/glowpuzzle.component';
import { RoomComponent } from './room/room.component';
import { MiddleComponent } from './middle/middle.component';
import { ReachedComponent } from './reached/reached.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { JEOPARDYBOARDComponent } from './jeopardyboard/jeopardyboard.component';
import { TryComponent } from './try/try.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    PuzzleComponent,
    NonogramComponent,
    PlantComponent,
    TorchComponent,

    NonogramComponent,
    BoardComponent,

    PuzzleComponent,
    NonogramComponent,
    BallsComponent,
    GlowpuzzleComponent,
    RoomComponent,
    MiddleComponent,
    ReachedComponent,
    CreateroomComponent,
    JEOPARDYBOARDComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    DragDropModule,
    AngularFirestoreModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
