import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeCostComponent } from './realtime-cost.component';

describe('RealtimeCostComponent', () => {
  let component: RealtimeCostComponent;
  let fixture: ComponentFixture<RealtimeCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
