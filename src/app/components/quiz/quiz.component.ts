import { ChooseTerrariumModalComponent } from './../choose-terrarium-modal/choose-terrarium-modal.component';

import {style, animate, transition, trigger} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translateY(200%)'}))
      ])
    ])
  ],
})

export class QuizComponent implements OnInit {

  terrariumContainer;

  testQuestionsArray = [
    {
      question: "which of the following can you put in the compost bin?",
      choices: [
        {
          text: "this is a pizza",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: true
        },
        {
          text: "yo",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
        {
          text: "blah",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
        {
          text: "hello",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
      ],
      explanation: "stuff like food items, soiled paper containers, and blah blah blah can be composted!"
    }, 
    {
      question: "this is question number 2!!",
      choices: [
        {
          text: "this is a pizza",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: true
        },
        {
          text: "yo",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
        {
          text: "blah",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
        {
          text: "hello",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
      ],
      explanation: "supercalifragilisticexpialidocious"
    }, 
    {
      question: "question number 3!",
      choices: [
        {
          text: "this is a pizza",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: true
        },
        {
          text: "yo",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
        {
          text: "blah",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
        {
          text: "hello",
          img_path: "https://images-na.ssl-images-amazon.com/images/I/71tWox9rkhL._SX425_.jpg",
          is_correct: false
        },
      ],
      explanation: "blha blasdfj alsdjf eiwojfdsaklfj asdjf klasjdf asdf 9sdf asd"
    }, 
  ]

  currentIndex = -1;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    // timeout is workaround for angular bug
    setTimeout( () => { this.openChooseTerrariumModal(); }, 100);
  }

  openChooseTerrariumModal() {
    const terrRef = this.modalService.open(ChooseTerrariumModalComponent, { size: 'lg' });
    terrRef.result.then(result => {
      this.terrariumContainer = result;
      this.currentIndex = 0; // show first question
    });
  }

  openExplanationModal(explanationText) {
    const ansRef = this.modalService.open(AnswerComponent);
    ansRef.componentInstance.explanation = explanationText;
    ansRef.result.then(result => {
      ++this.currentIndex;
    });
  }

}
