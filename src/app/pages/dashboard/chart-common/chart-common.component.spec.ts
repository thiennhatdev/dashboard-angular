import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCommonComponent } from './chart-common.component';

describe('ChartCommonComponent', () => {
  let component: ChartCommonComponent;
  let fixture: ComponentFixture<ChartCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
