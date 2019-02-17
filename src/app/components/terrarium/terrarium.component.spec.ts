import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariumComponent } from './terrarium.component';

describe('TerrariumComponent', () => {
  let component: TerrariumComponent;
  let fixture: ComponentFixture<TerrariumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrariumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
