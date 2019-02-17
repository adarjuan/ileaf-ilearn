import { Component, OnInit } from '@angular/core';
import {style, animate, transition, trigger} from '@angular/animations';

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
  show = true;

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
      ]
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
      ]
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
      ]
    }, 
  ]

  currentIndex = 0;

  ngOnInit() {
  }

  openExplanationModal() {
    // open modal
    console.log('open modal')
    ++this.currentIndex;
  }

}
