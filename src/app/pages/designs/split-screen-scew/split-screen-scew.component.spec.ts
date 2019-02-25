import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitScreenScewComponent } from './split-screen-scew.component';

describe('SplitScreenScewComponent', () => {
  let component: SplitScreenScewComponent;
  let fixture: ComponentFixture<SplitScreenScewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitScreenScewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitScreenScewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
