import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitenkarteComponent } from './visitenkarte.component';

describe('VisitenkarteComponent', () => {
  let component: VisitenkarteComponent;
  let fixture: ComponentFixture<VisitenkarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitenkarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitenkarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
