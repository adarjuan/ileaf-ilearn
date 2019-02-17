import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-plant',
  templateUrl: './progress-plant.component.html',
  styleUrls: ['./progress-plant.component.css']
})


export class ProgressPlantComponent implements OnInit {

  count: number = 0;

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
    this.url = this.progress[this.count];
    this.count++;
    if (this.count == 3) this.count = 0;    
  }

}
