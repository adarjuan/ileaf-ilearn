import { Component, OnInit, Input } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open() {
    const ansRef = this.modalService.open(AnswerComponent);
    ansRef.componentInstance.explanation = 'YEAHH';
  }

  

}
