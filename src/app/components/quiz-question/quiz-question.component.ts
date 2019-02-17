import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {style, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate(1000, style({transform: 'translateY(200%)'}))
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

  checkIfCorrectAnswer(choice) {
    if (choice.is_correct) {
      this.correctAnswerChosen.emit();
    }
  }

}
