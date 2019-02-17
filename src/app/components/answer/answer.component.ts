import { Component, OnInit, Input } from '@angular/core';
import {style, animate, transition, trigger} from '@angular/animations';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
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
export class AnswerComponent {

  @Input() explanation;

  constructor(public activeModal: NgbActiveModal) {
    
  }

}