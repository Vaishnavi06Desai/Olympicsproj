import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }

  getaf(){
    return this.af;
  }

  getUserState() {
    return this.af.authState;
  }

  login(user){
    return this.af.signInWithEmailAndPassword(user.email, user.password);
  }

  signup(user){
      return this.af.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.af.signOut();
  }
}
