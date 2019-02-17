
import {style, animate, transition, trigger} from '@angular/animations';
import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from '../answer/answer.component';

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
  @ViewChild('plant') progressPlant;

  loadImg: boolean = true;

  terrariumContainer;
  terrariumBowls = [1,2,3,4];

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
    }
  ]

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
        ++this.currentIndex;
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
    ++this.currentIndex;
    this.progressPlant.resetPlant();
  }

}
