import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { logindata, regdataemail, regdataphoneno } from '../JSONData/signin';
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
  signupdataemail: any;
  signupdataphoneno: any;

  provider: any;

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
    password: new FormControl('')
  })

  formreg = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    phone: new FormControl(''),
  })

  ngOnInit(): void {
    firebase.initializeApp(this.config);

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
    this.signindata = logindata;

    this.signupdataphoneno = regdataphoneno;
    this.signupdataemail = regdataemail;
    this.signupdata = this.signupdataemail;

    this.provider = new firebase.auth.GoogleAuthProvider();
    this.provider = new firebase.auth.GithubAuthProvider();
    // this.windowRef = this.win.windowRef
    // this.windowRef.recaptchaVerifier = this.as.getaf().signInWithPhoneNumber

    // this.windowRef.recaptchaVerifier.render()
  }

  phone() {
    this.phoneno = !this.phoneno;
    if (this.phoneno == true) {
      this.signupdata = this.signupdataphoneno;
      // document.querySelector("#recaptcha-container").style.display = "none";
    }

    else {
      // this.windowRef.recaptchaVerifier.clear();
      this.signupdata = this.signupdataemail;
    }
  }

  signupwithgoogle() {
    firebase.auth()
      .signInWithPopup(this.provider)
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
    firebase.auth().signInWithPhoneNumber("+91" + this.formreg.get("phone").value, appVerifier)
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
