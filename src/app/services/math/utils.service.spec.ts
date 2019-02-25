import { TestBed } from '@angular/core/testing';

import { MathUtilsService } from './utils.service';

describe('MathUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathUtilsService = TestBed.get(MathUtilsService);
    expect(service).toBeTruthy();
  });
});
