import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCommonComponent } from './info-common.component';

describe('InfoCommonComponent', () => {
  let component: InfoCommonComponent;
  let fixture: ComponentFixture<InfoCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
