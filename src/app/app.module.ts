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
import { HomeComponent } from './home/home.component';
import { PuzzleComponent } from './puzzle/puzzle.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    PuzzleComponent
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
