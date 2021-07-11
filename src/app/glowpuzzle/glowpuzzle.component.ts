import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-glowpuzzle',
  templateUrl: './glowpuzzle.component.html',
  styleUrls: ['./glowpuzzle.component.scss']
})
export class GlowpuzzleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".piece").on("click", function (e) {
      console.log($("#id").css("transform"))
      // let tr = $(e.target).css("transform");
      // let values = tr.split('(')[1];
      // values = values.split(')')[0];
      // var values2 = values.split(',');

      // var b = values2[1]; // 0.5
      // var angle = Math.round(Math.asin(Number(b)) * (180 / Math.PI));


      $(e.target).css("transform", 'rotateZ(' + ((90 + 90) % 360).toString() + 'deg)')
    })
  }

}
