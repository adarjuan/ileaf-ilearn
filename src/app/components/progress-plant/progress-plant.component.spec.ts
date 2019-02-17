import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPlantComponent } from './progress-plant.component';

describe('ProgressPlantComponent', () => {
  let component: ProgressPlantComponent;
  let fixture: ComponentFixture<ProgressPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
