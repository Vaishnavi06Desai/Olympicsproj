import { Component, OnInit } from '@angular/core';
import { Howl,Howler } from 'Howler';
@Component({
  selector: 'app-jeopardyboard',
  templateUrl: './jeopardyboard.component.html',
  styleUrls: ['./jeopardyboard.component.scss']
})
export class JEOPARDYBOARDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startmusic();
  }
  popup: boolean = true;
   sound:any = new Howl({
    src: ['../../assets/audio/sound.mp3']
  });
  startmusic(){
    this.sound.play();
    console.log("start")
  }
  stopmusic(){
    this.sound.pause();
    console.log("stop");
  }
}
