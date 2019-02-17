import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTerrariumModalComponent } from './choose-terrarium-modal.component';

describe('ChooseTerrariumModalComponent', () => {
  let component: ChooseTerrariumModalComponent;
  let fixture: ComponentFixture<ChooseTerrariumModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTerrariumModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTerrariumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
