import { AbstractType, Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {


  // @Input() c: Array<any> = [];
  scores: Array<any> = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getscores();
    // console.log(this.scores);
    // this.scores.sort(function(a,b){return a["Score"] - b["Score"]});
  }

  getscores(){
    console.log("???")
    this.db.collection("Rooms").doc(localStorage.getItem("code")).collection("Players").snapshotChanges().subscribe((res: any) => {
      
      // console.log(res);
      res.forEach(element => {
        this.scores.push({"Score": element.payload.doc.data().Score, "name": element.payload.doc.data().name})
      });
      // this.scores = res.payload.doc.data();
      console.log("...", this.scores);
      this.scores.sort(function(a,b){return a["Score"] - b["Score"]});
      this.scores.reverse();
      console.log("sorted", this.scores);
    })
  }

}
