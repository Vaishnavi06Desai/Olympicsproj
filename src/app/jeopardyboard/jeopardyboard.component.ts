import { Component, OnInit } from '@angular/core';
// import { Howl,Howler } from 'Howler';
import { AngularFirestore } from '@angular/fire/firestore';

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
  levels = { 1: "Easy", 2: "Medium", 3: "Difficult" }
  done = []
  questions = []
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    // if()
    // this.startmusic();
  }

  getmaxplayers() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
      this.maxplayer = res.payload.data().maxplayers;
    })
  }

  getturn() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
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
  question(x, y) {
    this.db.collection("Topics").doc(this.topics[x]).collection(this.levels[y]).snapshotChanges().subscribe(res => {
      var rand = Math.trunc(Math.random() * (res.length));

      // this.currentquestion = res[]
    })
  }

  answer() {

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
