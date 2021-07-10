import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  constructor() { }

  current = 0;
  colors = ["red", "green", "blue", "yellow", "pink"]
  answer = [];
  colour: [{"red": false, "green": false, "blue": false, "yellow": false, "pink": false}, {"red": false, "green": false, "blue": false, "yellow": false, "pink": false}, {"red": false, "green": false, "blue": false, "yellow": false, "pink": false}];
  ngOnInit(): void {
    for(let i of [1, 2, 3]){
      let rand = (Math.trunc(Math.random()*10) % 5) + 1;
      this.answer.push(this.colors[rand])
    }
    
  }

}
