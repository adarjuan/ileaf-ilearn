import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { Tera } from './tera';

@Component({
  selector: 'terrarium',
  templateUrl: './terrarium.component.html',
  styleUrls: ['./terrarium.component.css']
})
export class TerrariumComponent implements OnInit {
  plants: Plant[] = [
    { id: 1, name:"plant1", imgsrc: "../../assets/images/plant1.PNG" },
    { id: 2, name:"plant2", imgsrc: "../../assets/images/plant2.PNG" },
    { id: 3, name:"plant3", imgsrc: "../../assets/images/plant3.PNG" },
    { id: 4, name:"plant4", imgsrc: "../../assets/images/plant4.PNG" },
    { id: 5, name:"plant5", imgsrc: "../../assets/images/plant5.PNG" },
    { id: 6, name:"plant6", imgsrc: "../../assets/images/plant6.PNG" },
  ];

  teras: Tera[] = [
      { id: 1, name:"tera1", imgsrc: "../../assets/images/tera1.png"  },
      { id: 2, name:"tera2", imgsrc: "../../assets/images/tera2.png"  },
      { id: 3, name:"tera3", imgsrc: "../../assets/images/tera3.png" },
  ];

  constructor() { }

  ngOnInit() { 

  }

  selectedTera: Tera;

  teraOnSelect(t: Tera): void {
    this.selectedTera = t;

  }
  
  selectedPlant: Plant;
  plantOnSelect(p: Plant): void {
    this.selectedPlant = p;
    // console.log(this.selectedPlant.name);
  }
  
}
