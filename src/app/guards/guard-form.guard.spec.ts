import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { guardFormGuard } from './guard-form.guard';

describe('guardFormGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
