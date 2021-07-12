import { ResolvedStaticSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.scss']
})
export class CreateroomComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }

  name = new FormGroup({
    nameuser: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    code: new FormControl('',  [Validators.required, Validators.pattern(/^\S*$/)]),
    players: new FormControl('',  [Validators.required, Validators.pattern('[1-4]')])
  })

  room = new FormGroup({
    numberofplayers: new FormControl(' ')
  })

  ngOnInit(): void {
    if (localStorage.getItem("code")) {
      this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe(res => {
        if (res) {
          this.router.navigate(["/jeopardy"], { queryParams: { code: localStorage.getItem("code") } });
        }
        else {
          localStorage.removeItem("code");
          localStorage.removeItem("name");
          localStorage.removeItem("player");
        }
      })

    }
    // this.getpeople();
  }

  createroom() {
    this.db.collection("Rooms").add({ "maxplayers": Number(this.name.get("players").value), "status": false, "Turn": 0, "createdby":  this.name.get("nameuser").value}).then((res: any) => {
      // console.log(res);
      localStorage.setItem('code', res.id);
      
      localStorage.setItem('player', "0");
      this.db.collection("Rooms").doc(res.id).collection("Players").add({ "name": this.name.get("nameuser").value, "Score": 0 }).then(res => {
        localStorage.setItem('name', res.id);
        this.router.navigate(["/jeopardy"], { queryParams: { code: res.id } });
      }).catch(e => {
        console.log(e);
      })
    })
      .catch(e => {
        console.log(e);
      })
  }

  getpeople() {
    return new Promise((resolve, reject) => {
      this.db.collection("Rooms").doc(this.name.get("code").value).collection("Players").get().toPromise().then((res: any) => {
        var i = 0;
        res.forEach((doc) => {
          i += 1
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var post = 0

          if (doc.data().name.split("-")[1] == this.name.get("nameuser").value) {
            post += 1;
          }
          if (post != 0) this.name.get("nameuser").setValue(this.name.get("nameuser").value + "-" + post.toString());

        });
        resolve(i);
      })
    })
  }

  getmaxpl() {
    return new Promise((resolve, reject) => {
      this.db.collection("Rooms").doc(this.name.get("code").value).get().toPromise().then((res: any) => {
        resolve(res.data().maxplayers);
      })
    })
  }
  joinroom() {

    this.getpeople().then(res => {
      this.getmaxpl().then(res2 => {
        if (res == res2) {
          console.log("Full!")
          return
        }
        if (res == 1) {
          localStorage.setItem('player', "1");
        }
        else if (res == 2) {
          localStorage.setItem('player', "2");
        }
        else if (res == 3) {
          localStorage.setItem('player', "3");
        }
        console.log(this.name.get("nameuser").value);
        localStorage.setItem('code', this.name.get("code").value);
        localStorage.setItem('name', this.name.get("nameuser").value);
        this.db.collection("Rooms").doc(this.name.get("code").value).collection("Players").add({ "name": this.name.get("nameuser").value, "Score": 0 }).then(ress => {
          localStorage.setItem('name', ress.id);
          this.router.navigate(["/jeopardy"], { queryParams: { code: this.name.get("code").value } });
        }).catch(e => {
          console.log(e);
        })
      })
    })

    // this.db.collection("Rooms").doc(this.name.get("code").value).collection("Players").snapshotChanges().subscribe((res: any) => {
    //   console.log(res.length)
    //   this.db.collection("Rooms").doc(this.name.get("code").value).get().toPromise().then((ress: any) => {
    //     console.log(res.docs)
    //     if (res.length == 4) {
    //       console.log("Room Full!")
    //     }
    //     else {
    //       var post = 0
    //       for (let i of res) {
    //         if (i.payload.doc.data().name == this.name.get("nameuser").value) {
    //           post += 1;
    //         }
    //       }
    //       var name;
    //       if (post != 0) name = this.name.get("nameuser").value + post.toString();
    //       else name = this.name.get("nameuser").value;

    //     }
    //   })
    //     .catch(e => {
    //       console.log(e);
    //     })


    // })


    // this.db.collection("Rooms").doc(this.name.get("code").value).snapshotChanges().toPromise().then((res: any) => {
    //   if(res)

    // })

  }
}
