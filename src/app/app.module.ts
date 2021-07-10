import { NgModule } from '@angular/core';
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
import { PuzzleComponent } from './puzzle/puzzle.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
<<<<<<< HEAD
    PuzzleComponent
=======
    NonogramComponent
>>>>>>> 6ecaca7021c2aa19364e3ecc5acf998e25b852eb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
