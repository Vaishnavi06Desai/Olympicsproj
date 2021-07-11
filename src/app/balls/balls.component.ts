import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.scss']
})
export class BallsComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  popup: boolean = false;
  // allowDrop(ev:Event) {
  //   ev.preventDefault();
  // }
  
  // drag(ev:DragEvent) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  // }
  
  // drop(ev:DragEvent) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }
}
