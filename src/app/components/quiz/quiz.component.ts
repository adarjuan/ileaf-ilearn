
import {style, animate, transition, trigger} from '@angular/animations';
import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from '../answer/answer.component';

import { data } from "../../../assets/quizData";

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

  terrariumContainer;
  terrariumBowls = [1,2,3,4];
  showCongratsPage = false;

  quizData = data;

  currentIndex = -1;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.openChooseTerrariumModal();
  }

  openExplanationModal(explanationText) {
    const ansRef = this.modalService.open(AnswerComponent);
    ansRef.componentInstance.explanation = explanationText;
    this.progressPlant.grow();

    ansRef.result.then(result => {
      if (this.progressPlant.isReadyToChoosePlant()) {
        console.log('plant ready')
        this.openChoosePlantModal();
      } else {
        this.nextQuestion();
      }
    });
  }

  openChooseTerrariumModal() {
    document.getElementById('chooseTerrariumModal').style.display = "block";
  }

  closeChooseTerrariumModal() {
    document.getElementById('chooseTerrariumModal').style.display = "none";
    this.currentIndex = 0; // show first question
  }

  openChoosePlantModal() {
    document.getElementById('choosePlantModal').style.display = "block";
  }

  closeChoosePlantModal() {
    document.getElementById('choosePlantModal').style.display = "none";
    this.nextQuestion();
    this.progressPlant.resetPlant();
  }

  nextQuestion() {
    if (this.currentIndex < 8) {
      ++this.currentIndex;
    } else {
      this.showCongratsPage = true;
    }
      
  }

}
