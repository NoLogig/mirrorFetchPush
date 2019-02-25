import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralsComponent } from './spirals.component';

describe('SpiralsComponent', () => {
  let component: SpiralsComponent;
  let fixture: ComponentFixture<SpiralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
