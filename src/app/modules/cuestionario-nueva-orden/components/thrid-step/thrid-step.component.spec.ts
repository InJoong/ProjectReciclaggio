import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThridStepComponent } from './thrid-step.component';

describe('ThridStepComponent', () => {
  let component: ThridStepComponent;
  let fixture: ComponentFixture<ThridStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThridStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThridStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
