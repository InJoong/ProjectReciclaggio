import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLayoutComponent } from './service-layout.component';

describe('ServiceLayoutComponent', () => {
  let component: ServiceLayoutComponent;
  let fixture: ComponentFixture<ServiceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
