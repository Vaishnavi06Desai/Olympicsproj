import { Component, OnInit } from '@angular/core';
// import { Howl, Howler } from 'Howler';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app'

@Component({
  selector: 'app-jeopardyboard',
  templateUrl: './jeopardyboard.component.html',
  styleUrls: ['./jeopardyboard.component.scss']
})
export class JEOPARDYBOARDComponent implements OnInit {



 
  private ctx: AudioContext;

  topics: any;
  maxplayer: any;
  currentquestion: any;
  ismyquestion: boolean = false;
  status: boolean = false;
  levels = { 1: "Easy", 2: "Medium", 3: "Difficult" }
  done = [];
  questions = [];
  noofplayers = 0;
  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("code")){
      this.router.navigate(["/createroom"]);
    }
    this.getmaxplayersandstatus();
    this.getturn();
    // if()
    // this.startmusic();
  }

  getmaxplayersandstatus() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
      this.maxplayer = res.payload.data().maxplayers;
      this.status = res.payload.data().status;
    })
  }

  getnumberofplayers(){
    this.db.collection("Rooms").doc(localStorage.getItem("code")).collection("Players").snapshotChanges().subscribe((res: any) => {
      this.noofplayers = res.length;
    })
  }

  getturn() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
      console.log(res.payload.data())
      if (res.payload.data().Turn % Number(this.maxplayer) == Number(localStorage.getItem("player"))) this.ismyquestion = true;
      else this.ismyquestion = false;
    })
  }

  gettopics() {
    this.db.collection("Topics").snapshotChanges().subscribe(res => {
      for (let i of [1, 2, 3]) {
        var rand = Math.trunc(Math.random() * (res.length));
        this.topics.push(res[rand].payload.doc.id);
        res.slice(rand, 1);
      }
    })
  }

  getquestions() {
    for (let x of [1, 2, 3]) {
      this.db.collection("Topics").doc(this.topics[x]).collection("Easy").snapshotChanges().subscribe(res => {
        var rand = Math.trunc(Math.random() * (res.length));
        this.questions[x].push(res[rand].payload.doc.id);
        res.slice(rand, 1);
      })
      this.db.collection("Topics").doc(this.topics[x]).collection("Medium").snapshotChanges().subscribe(res => {
        var rand = Math.trunc(Math.random() * (res.length));
        this.questions[x].push(res[rand].payload.doc.id);
        res.slice(rand, 1);

      })
      this.db.collection("Topics").doc(this.topics[x]).collection("Difficult").snapshotChanges().subscribe(res => {
        var rand = Math.trunc(Math.random() * (res.length));
        this.questions[x].push(res[rand].payload.doc.id);
        res.slice(rand, 1);

      })
    }

  }

  startgame(){
    this.db.collection("Rooms").doc(localStorage.getItem("code")).update({status: true});
  }
  question(x, y) {
    this.db.collection("Topics").doc(this.topics[x]).collection(this.levels[y]).snapshotChanges().subscribe(res => {
      var rand = Math.trunc(Math.random() * (res.length));

      // this.currentquestion = res[]
    })
  }

  answer() {
    var increment = firebase.firestore.FieldValue.increment(1);
    this.db.collection("Rooms").doc(localStorage.getItem("code")).update({Turn: increment});
  }

  popup: boolean = true;
  //  sound:any = new Howl({
  //   src: ['../../assets/audio/sound.mp3']
  // });
  // startmusic(){
  //   this.sound.play();
  //   console.log("start")
  // }
  // stopmusic(){
  //   this.sound.pause();
  //   console.log("stop");
  // }
}
