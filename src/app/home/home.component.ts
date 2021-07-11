import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

  chosen = -1;
  currconvo = 0;
  isoverbool: boolean = false;
  conversation = ["You tap the robot to life", "smooth low buzzing pop pop pop pop      pop     pop beep pop pop     pop beep pop pop     beep beep beep", "*looks at you* Analyzing species. Human grade 21C.  fetching translation libraries. ",
    "Hi there", "You are in Kärgüs 0.4 which is currently orbiting around the m-class planet Zeech also known as earth.", "I'm VAJ the secondary gurdian of the ship. I can talk and also interpret facial features and I have also started taking the emotional program."]
  conversationyou = ["next", "next", "next", "hello, where am i?", "What are you?"]
  options = ["Oh you seem pretty smart", "I thought you guys must be more advanced"]

  convo: boolean = false;
  tictactoe: boolean = false;
  user: any;
  ngOnInit(): void {
    // console.log($("#try").css("transform"));
    // let tr = $("#try").css("transform");
    // let values = tr.split('(')[1];
    // values = values.split(')')[0];
    // var values2 = values.split(',');

    // var a = values2[0]; // 0.866025
    // var b = values2[1]; // 0.5
    // var c = values2[2]; // -0.5
    // var d = values2[3];
    // console.log(b)
    // var angle = Math.round(Math.asin(Number(b)) * (180 / Math.PI));
    // console.log(angle);
    // this.as.getUserState().subscribe(user => {if(user) this.user = user; else this.router.navigate(['/signin'])})
  }

  formanswer = new FormGroup({
    puzzle1: new FormControl('', [Validators.required, Validators.pattern('123')]),
    puzzle2: new FormControl('', [Validators.required, Validators.pattern('123')]),
    puzzle3: new FormControl('', [Validators.required, Validators.pattern('')]),
    puzzle4: new FormControl('', [Validators.required, Validators.pattern('')]),
    puzzle5: new FormControl('', [Validators.required, Validators.pattern('')]),
    puzzle6: new FormControl('', [Validators.required, Validators.pattern('')]),
  })

  returnformname(i) {
    return "puzzle" + i.toString();
  }

  formcont(name: string) { return this.formanswer.get(name)!; }

  toggleconvo() {
    this.convo = !this.convo;
    if (this.convo == false) this.resetrobo();
  }
  nextcon() {
    this.currconvo += 1;
    this.isover();
  }
  logout() {
    this.as.logout();
    this.router.navigate(['/signin'])
  }

  isconvooptions() {
    if (this.currconvo == 5) return true;
    return false;
  }

  resetrobo() {
    this.isoverbool = true;
    this.currconvo = 0;
    this.convo = false;
    this.chosen = -1;
    this.conversation = ["You tap the robot to life", "smooth low buzzing pop pop pop pop      pop     pop beep pop pop     pop beep pop pop     beep beep beep", "*looks at you* Analyzing species. Human grade 21C.  fetching translation libraries. ",
      "Hi there", "You are in Kärgüs 0.4 which is currently orbiting around the m-class planet Zeech also known as earth.", "I'm VAJ the secondary gurdian of the ship. I can talk and also interpret facial features and I have also started taking the emotional program."]
    this.conversationyou = ["next", "next", "next", "hello, where am i?", "What are you?"]
  }
  isover() {
    if (this.chosen == -1) { this.isoverbool = false; return };
    // if (!(this.chosen == 0 && this.currconvo == 4)) return false;
    if (this.chosen == 0) if (this.currconvo < 4) { this.isoverbool = false; return };
    if (this.chosen == 1) if (this.currconvo < 3) { this.isoverbool = false; return };
    // if (!(this.chosen == 1 && this.currconvo == 3)) return false;
    this.resetrobo();
    console.log(this.convo);
    return;
  }

  cowsandbulls = false;
  pickoption(o) {
    // this.isover();
    this.currconvo = 0;
    this.chosen = o;
    if (o == 0) {
      this.conversation = [];
      this.conversation = ["...", "Through the door", "There is one code i can give you; the sixth one.", "I am the sixth code."]
      this.conversationyou = ["how do i get out of here?", "but i do not know the code.", "Oh what is it?", "End"]

    }
    else {
      this.conversation = [];
      this.conversation = ["...", "One way is to land ofcourse.", "*sarcastically* Im sorry, im not that advanced."]
      this.conversationyou = ["how do i get out of here?", "Do you know the way out of this portal?", "End"]
    }

  }
}
