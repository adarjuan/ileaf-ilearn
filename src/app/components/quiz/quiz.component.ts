
import {style, animate, transition, trigger} from '@angular/animations';
import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from '../answer/answer.component';

import { data } from "../../../assets/quizData";
import { Plant } from '../terrarium/plant';
import { Tera } from '../terrarium/tera';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })) 
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0 })) 
      ])
    ]),
  ],
})

export class QuizComponent implements OnInit {
  @ViewChild('plant') progressPlant;

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

  terrariumContainer;
  terrariumBowls = [1,2,3,4];
  showCongratsPage = false;

  quizData = data;

  selectedTera: Tera;
  selectedPlant: Plant;

  canvasVisible = false;

  currentIndex = -1;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.openTerrariumModal();
  }

  teraOnSelect(t: Tera): void {
    this.selectedTera = t;
  }

  plantOnSelect(p): void {
    console.log(p)
    this.selectedPlant = p;
  }

  openExplanationModal(explanationText) {
    const ansRef = this.modalService.open(AnswerComponent);
    ansRef.componentInstance.explanation = explanationText;
    this.progressPlant.grow();

    ansRef.result.then(result => {
      if (this.progressPlant.isReadyToChoosePlant()) {
        console.log('plant ready')
        this.openTerrariumModal();
      } else {
        this.nextQuestion();
      }
    });
  }

  openTerrariumModal() {
    document.getElementById('terrariumModal').style.display = "block";
    this.canvasVisible = true;
  }

  closeTerrariumModal() {
    this.canvasVisible = false;
    document.getElementById('terrariumModal').style.display = "none";

    if (this.currentIndex < 0) {
      this.currentIndex = 0; // show first question
    } else {
      this.nextQuestion();
      this.progressPlant.resetPlant();
    }
  }

  nextQuestion() {
    if (this.currentIndex < 8) {
      ++this.currentIndex;
    } else {
      this.showCongratsPage = true;
      this.openTerrariumModal();
      this.showCongratsPagee();
    }
      
  }

  showCongratsPagee() {

  }

}
