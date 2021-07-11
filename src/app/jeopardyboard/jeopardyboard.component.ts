import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeopardyboard',
  templateUrl: './jeopardyboard.component.html',
  styleUrls: ['./jeopardyboard.component.scss']
})
export class JEOPARDYBOARDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popup: boolean = false;
}
