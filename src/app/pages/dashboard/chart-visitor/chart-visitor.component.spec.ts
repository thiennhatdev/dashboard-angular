import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVisitorComponent } from './chart-visitor.component';

describe('ChartVisitorComponent', () => {
  let component: ChartVisitorComponent;
  let fixture: ComponentFixture<ChartVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
