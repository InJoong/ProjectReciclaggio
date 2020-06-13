import { TestBed } from '@angular/core/testing';

import { AuthDriverService } from './auth-driver.service';

describe('AuthDriverService', () => {
  let service: AuthDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
