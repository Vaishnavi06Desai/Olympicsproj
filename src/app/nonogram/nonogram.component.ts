import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nonogram',
  templateUrl: './nonogram.component.html',
  styleUrls: ['./nonogram.component.scss']
})
export class NonogramComponent implements OnInit {
  @Input() value: 'X' | 'O';
  constructor() { }

  ngOnInit(): void {
  }

}
