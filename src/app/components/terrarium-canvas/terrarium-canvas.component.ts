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
  @Input('canvasVisible') canvasVisible;

  myP5: any;
  constructor() { }

  ngOnInit() {
    this.myP5 = new p5(this.sketch)
  }

sketch = (p: any) => {
  console.log('new sketch')
    var x;
    var y;
    var startX = 0;
    var startY = 0;
    var plantSrcs = ["assets/images/plant1.PNG", "assets/images/plant2.PNG", "assets/images/plant3.PNG",
                    "assets/images/plant4.PNG", "assets/images/plant5.PNG", "assets/images/plant6.PNG"];
    var teraSrcs = ["assets/images/tera1.png", "assets/images/tera2.png", "assets/images/tera3.png"];
    var plantImages = [];
    var teraImages = [];
    var plantIndx;
    var canvas;
    var imagePositions = []

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
      canvas = p.createCanvas( p.windowWidth *.45, 400);
      canvas.parent("terrarium");
      x = 0;
      y = 50;
    } 
    
    p.draw = () => { 
      p.background(220);

      if (this.teraOption != null) {
        p.background(teraImages[this.teraOption.id - 1]);
      }
      for (let i = 0; i < imagePositions.length; i++) {
        p.image(imagePositions[i].image, 
            imagePositions[i].x, 
            imagePositions[i].y, 
            imagePositions[i].image.width / 3, 
            imagePositions[i].image.height / 3);
      }
      if (this.plantOption != null) {
        plantIndx = this.plantOption.id - 1;
        var img = plantImages[plantIndx];
        p.image(img, x, y, img.width / 3, img.height / 3);
      }

    }
    
    p.mousePressed = () => {
      if (this.canvasVisible) {
        startX = p.mouseX;
        startY = p.mouseY;

      } else if (plantIndx) {
        imagePositions.push(
          {
            "image": plantImages[plantIndx], 
            "x": x, 
            "y": y
          });
          plantIndx = null;
      }

    }
    
    p.mouseDragged = () => {
      if (this.canvasVisible) {
        var diffx = startX - p.mouseX;
        x = x - diffx;
        startX = p.mouseX;

        var diffy = startY - p.mouseY;
        y = y - diffy;
        startY = p.mouseY;
      }
    }

    p.keyTyped = () => {
      if (p.key == 'p') 
      {
        p.save("terrarium.jpeg");
      }
    }

  }

}
