import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouthStepComponent } from './fouth-step.component';

describe('FouthStepComponent', () => {
  let component: FouthStepComponent;
  let fixture: ComponentFixture<FouthStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouthStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
