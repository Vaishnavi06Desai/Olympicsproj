import { Component, OnInit } from '@angular/core';
import '@google/model-viewer';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log("Hiii")
  }
}
