import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariumCanvasComponent } from './terrarium-canvas.component';

describe('TerrariumCanvasComponent', () => {
  let component: TerrariumCanvasComponent;
  let fixture: ComponentFixture<TerrariumCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrariumCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrariumCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
