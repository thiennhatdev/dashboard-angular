import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskSpaceComponent } from './disk-space.component';

describe('DiskSpaceComponent', () => {
  let component: DiskSpaceComponent;
  let fixture: ComponentFixture<DiskSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
