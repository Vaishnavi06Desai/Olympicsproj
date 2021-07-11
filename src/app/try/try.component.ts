import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  topics: any;
  form = new FormGroup({
    name: new FormControl(''),
    level: new FormControl(''),
  })

  form2 = new FormGroup({
    Question: new FormControl(''),
    Multiplier: new FormControl(''),
    Answer: new FormControl(''),
    o1: new FormControl(''),
    o2: new FormControl(''),
    o3: new FormControl(''),
    o4: new FormControl('')
  })
  ngOnInit(): void {
    this.gettopics();
  }

  gettopics() {
    this.db.collection("Topics").snapshotChanges().subscribe(res => {
      this.topics = res;
    })
  }

  clicktopic(id) {
    this.form.get("name").setValue(id);
  }

  submit() {
    this.db.collection("Topics").doc(this.form.get("name").value).collection(this.form.get("level").value).add(this.form2.value);
  }

}
