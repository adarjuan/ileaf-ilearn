import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-plant',
  templateUrl: './progress-plant.component.html',
  styleUrls: ['./progress-plant.component.css']
})


export class ProgressPlantComponent implements OnInit {

  count: number = -1;

  progress = [
    '../../assets/images/plant01.png', 
    '../../assets/images/plant02.png', 
    '../../assets/images/plant03.png',
  ]

  url = '';

  constructor() { }

  ngOnInit() {
  }

  grow() {
    this.url = this.progress[++this.count];
  }

  isReadyToChoosePlant() {
    console.log('plant', (this.count == 2))
    return (this.count == 2);
  }

  resetPlant() {
    this.count = -1;
    this.url = '';
  }


}
