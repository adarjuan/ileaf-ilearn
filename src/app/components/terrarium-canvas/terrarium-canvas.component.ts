import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../terrarium/plant';
import * as p5 from 'p5';

@Component({
  selector: 'terrarium-canvas',
  templateUrl: './terrarium-canvas.component.html',
  styleUrls: ['./terrarium-canvas.component.css']
})
export class TerrariumCanvasComponent implements OnInit {
  @Input('plantOption') plantOption;
  @Input('teraOption') teraOption;

  myP5: any;
  constructor() { }

ngOnInit() {
  this.myP5 = new p5(this.sketch)
}

sketch = (p: any) => {
    var x = 1000;
    var y = 300;
    var startX = 0;
    var startY = 0;
    var plantSrcs = ["assets/images/plant1.PNG", "assets/images/plant2.PNG", "assets/images/plant3.PNG",
                    "assets/images/plant4.PNG", "assets/images/plant5.PNG", "assets/images/plant6.PNG"];
    var teraSrcs = ["assets/images/tera1.png", "assets/images/tera2.png", "assets/images/tera3.png"];
    var plantImages = [];
    var teraImages = [];
    var plantIndx;
    var canvas;
    

    p.preload = () => {
        for(let i = 0; i < plantSrcs.length; i++)
        {
            plantImages[i] = p.loadImage(plantSrcs[i]);
        }  
        for( let i = 0; i < teraSrcs.length; i ++)
        {
          teraImages[i] = p.loadImage(teraSrcs[i]);
        }
    }
    
    p.setup = () => { 
      canvas = p.createCanvas( 600, 400);
      canvas.parent("terrarium");
    } 
    
    p.draw = () => { 
      p.background(220);
      if (this.teraOption != null)
      {
        p.background(teraImages[this.teraOption.id - 1]);
      }
      if (this.plantOption != null)
      {
        console.log(this.plantOption.name);
        plantIndx = this.plantOption.id - 1;
        p.image(plantImages[plantIndx], x, y);
      }

    }
    
    p.mousePressed = () => {
      startX = p.mouseX;
      startY = p.mouseY;
    }
    
    p.mouseDragged = () => {
      var diffx = startX - p.mouseX;
      x = x - diffx;
      startX = p.mouseX;

      var diffy = startY - p.mouseY;
      y = y - diffy;
      startY = p.mouseY;
    }

  }

}
