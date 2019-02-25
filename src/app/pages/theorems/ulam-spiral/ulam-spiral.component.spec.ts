import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlamSpiralComponent } from './ulam-spiral.component';

describe('UlamSpiralComponent', () => {
  let component: UlamSpiralComponent;
  let fixture: ComponentFixture<UlamSpiralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlamSpiralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlamSpiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
