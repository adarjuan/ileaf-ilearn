import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'choose-terrarium-modal',
  templateUrl: './choose-terrarium-modal.component.html',
  styleUrls: ['./choose-terrarium-modal.component.css']
})
export class ChooseTerrariumModalComponent implements OnInit {

  terrariumBowls = [1,2,3,4];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}