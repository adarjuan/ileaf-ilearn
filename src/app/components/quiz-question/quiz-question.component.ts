import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {style, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('800ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate(1300, style({transform: 'translateY(200%)'}))
      ])
    ]),
    trigger('shake', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ])
  ],
  
})
export class QuizQuestionComponent implements OnInit {

  @Input() questionData: any;
  @Output() correctAnswerChosen = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  wrongAnswer = -1;

  checkIfCorrectAnswer(choice, index) {
    if (this.wrongAnswer != index) {
      if (choice.correct_answer) {
        this.correctAnswerChosen.emit();
      } else {
        this.shake(index)
      }
    }
  }

  shake(index) {
    this.wrongAnswer = index;
    setTimeout( () => { this.wrongAnswer = -1; }, 800);
  }

}

// ../../assets/imgs/