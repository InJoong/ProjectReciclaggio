import { TestBed } from '@angular/core/testing';

import { AuthDriverGuard } from './auth-driver.guard';

describe('AuthDriverGuard', () => {
  let guard: AuthDriverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDriverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
