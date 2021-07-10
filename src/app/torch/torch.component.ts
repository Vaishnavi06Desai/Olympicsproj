import { Component, OnInit } from '@angular/core';
import * as $ from 'jQuery';


@Component({
  selector: 'app-torch',
  templateUrl: './torch.component.html',
  styleUrls: ['./torch.component.scss']
})
export class TorchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.moveTorch();
    //this is a sample flashlight effect

$(document).ready(function() {
  $(this).mousemove(function(e) {
    $("#light").css({
      "top": e.pageY - 250,
      "left": e.pageX - 250
    })
  }).mousedown(function(e) {
    switch (e.which) {
        case 1:
            $("#light").toggleClass("light-off");
            break;
        case 2:
            console.log('Middle Mouse button pressed.');
            break;
        case 3:
            console.log('Right Mouse button pressed.');
            break;
        default:
            console.log('You have a strange Mouse!');
    }
  })
})
  }
  moveTorch(event){
    var torch = <HTMLElement>document.getElementsByClassName("torch")[0];
    torch.style.clipPath = `circle(80px at ${event.offsetX}px ${event.offsetY}px)`;
  }
}
