import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.scss']
})
export class CreateroomComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }
  
  room = new FormGroup({
    numberofplayers: new FormControl(' ')
  })

  ngOnInit(): void {
  }

  createroom(){
    this.db.collection("Rooms").add({"players": 4, "status": "Not Started", "Turn": 0}).then((res: any) => {
      this.router.navigate(["/board"], { queryParams: { code: res.payload.doc.id }})
    })
    .catch(e => {

    })
  }
}
