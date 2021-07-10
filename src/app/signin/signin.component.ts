import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { logindataemail, logindataphoneno, regdata } from '../JSONData/signin';
import { AuthService } from '../services/auth.service';
import { WindowService } from '../services/window.service';

import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private win: WindowService) { }

  windowRef: any;

  verificationCode: string;

  user: any;

  login: boolean = true;
  error: any;

  phoneno: boolean = false;

  selectedrole: any;
  signindata: any;
  signupdata: any;
  signindataemail: any;
  signindataphoneno: any;

  providergoogle: any;
  providergithub: any;
  providertwitter: any;
  providerfacebook: any;

  config = {
    apiKey: "AIzaSyAzmqI7vG8pdJXJcV-oEw-g1VAU_ziSL34",
    authDomain: "cupcakesbot-ldhf.firebaseapp.com",
    projectId: "cupcakesbot-ldhf",
    storageBucket: "cupcakesbot-ldhf.appspot.com",
    messagingSenderId: "345973871411",
    appId: "1:345973871411:web:72a967d18d5d4ff2486446"
  }

  move() {
    this.login = !this.login;
  }

  submit() {
    // if(this.login){
    //   this.as.login(this.formlogin.value).then(res => {
    //     this.router.navigate(['/home']);
    //   })
    // }
    // else{
    //   this.formreg.get("role").setValue(this.signupdata[5].value);
    //   this.as.signup(this.formreg.value).then(res => {
    //     this.router.navigate(['/home']);
    //   })
    // }
  }

  formlogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl('')
  })

  formreg = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    
  })

  ngOnInit(): void {
    firebase.initializeApp(this.config);

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
    this.signupdata = regdata;

    this.signindataphoneno = logindataphoneno;
    this.signindataemail = logindataemail;
    this.signindata = this.signindataemail;

    this.providergoogle = new firebase.auth.GoogleAuthProvider();
    this.providergithub = new firebase.auth.GithubAuthProvider();
    this.providertwitter = new firebase.auth.TwitterAuthProvider();
    this.providerfacebook = new firebase.auth.FacebookAuthProvider();

    // this.windowRef = this.win.windowRef
    // this.windowRef.recaptchaVerifier = this.as.getaf().signInWithPhoneNumber

    // this.windowRef.recaptchaVerifier.render()
  }

  phone() {
    this.phoneno = !this.phoneno;
    if (this.phoneno == true) {
      this.signindata = this.signindataphoneno;
      // document.querySelector("#recaptcha-container").style.display = "none";
    }

    else {
      // this.windowRef.recaptchaVerifier.clear();
      this.signindata = this.signindataemail;
    }
  }

  signupwithgoogle(){
    this.signupwith3party(this.providergoogle);
  }

  signupwithgithub(){
    this.signupwith3party(this.providergithub);
  }

  signupwithtwitter(){
    this.signupwith3party(this.providertwitter);
  }

  signupwithfacebook(){
    this.signupwith3party(this.providerfacebook);
  }

  signupwith3party(provider) {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var user = result.user;
        console.log(result, user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;
    console.log("hii");
    firebase.auth().signInWithPhoneNumber("+91" + this.formlogin.get("phone").value, appVerifier)
      .then(result => {

        this.windowRef.confirmationResult = result;

      })
      .catch(error => console.log(error));

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {

        this.user = result.user;

      })
      .catch(error => console.log(error, "Incorrect code entered?"));
  }

}
