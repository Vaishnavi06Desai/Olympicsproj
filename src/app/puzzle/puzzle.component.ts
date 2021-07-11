import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  constructor() { }

  current = -1;
  cowsno = 0;
  bullsno = 0;
  correctanswer: boolean = false;
  colors = ["red", "green", "blue", "yellow", "pink"]
  answer = [];
  colbuttons = [{"red": false, "green": false, "blue": false, "yellow": false, "pink": false}, {"red": false, "green": false, "blue": false, "yellow": false, "pink": false}, {"red": false, "green": false, "blue": false, "yellow": false, "pink": false}];
  ngOnInit(): void {
    console.log(this.colbuttons)
    for(let i of [1, 2, 3]){
      let rand = (Math.trunc(Math.random()*10) % 5);
      this.answer.push(this.colors[rand])
    }
    console.log(this.answer);
  }

  clear(){
    for(let i of this.colbuttons){
      for(let j in i){
        i[j] = false;
      }
    }
  }
  fill(col){

    this.current += 1;
    if(this.current == 0) this.clear();
    this.colbuttons[this.current][col] = true;
    // console.log(this.colbuttons);
    if(this.current == 2) 
    {
      this.current = -1;
      this.calc();
      this.matched1 = [];
      this.matched2 = [];
      if(this.bullsno == 3) this.correctanswer = true;
      // console.log(this.cowsno, this.bullsno)
    }

  }

  calc(){
    this.bulls();
    this.cows();
  }

  bulls(){
    this.bullsno = 0;
    var index1 = -1;
    var index2 = -1;
    for(let i of this.answer){
      index1 += 1
      for(let j of this.colbuttons){
        index2 += 1
        // console.log(index1, index2)
        if(index1 != index2) continue;
        // console.log(i, j[i]);
        if(j[i] == true) {
          this.bullsno += 1
          this.matched2.push(index2);
          this.matched1.push(index1);

        };
      }
      index2 = -1;
    }
    
  }
  matched1 = [];
  matched2 = [];
  cows(){
    this.cowsno = 0;
    var index1 = -1;
    var index2 = -1;
    for(let i of this.answer){
      index1 += 1
      for(let j of this.colbuttons){
        index2 += 1
        if(index1 == index2) continue;
        if(this.arrayin(index1, this.matched1) || this.arrayin(index2, this.matched1)) continue;
        // console.log(j, i, index1, index2, this.matched);
        if(j[i] == true) this.cowsno += 1;
        this.matched2.push(index2);
        this.matched1.push(index1);
      }
      index2 = -1;
    }
  }

  arrayin(elem, arr){
    for(let i of arr) if(elem == i) return true;
    return false;
  }

}
