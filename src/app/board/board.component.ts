import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  arrnum:number[];
  winner: string;
  //arrnumsearch:number[];
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.arrnum = Array(0,1,2,3,4,5,6,7,8);
   // this.arrnumsearch = Array(0,1,2,3,4,5,6,7,8);
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    this.arrnum.splice(this.arrnum.indexOf(idx),1);
  
   // console.log(this.arrnum.length);
   // console.log(rand);
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      console.log("player X"+idx);
    }
    this.winner = this.calculateWinner();
    console.log(this.arrnum);
    let rand =this.arrnum[Math.trunc((Math.random()*this.arrnum.length))];
    //console.log(rand);
this.playercomp(rand);
  }

playercomp(rand:number){
console.log(rand);
  if (!this.squares[rand]) {
    console.log("player O"+rand);
    this.squares.splice(rand, 1, this.player);
    this.xIsNext = !this.xIsNext;
    this.arrnum.splice(this.arrnum.indexOf(rand),1);
  
  }
  this.winner = this.calculateWinner();

}
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {console.log("win");
        return this.squares[a];
      }
    }
    return null;
  }

}
