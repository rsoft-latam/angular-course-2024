import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { guardChildGuard } from './guard-child.guard';

describe('guardChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
