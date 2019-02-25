import { TestBed } from '@angular/core/testing';

import { CanvasUtilsService } from './utils.service';

describe('CanvasUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasUtilsService = TestBed.get(CanvasUtilsService);
    expect(service).toBeTruthy();
  });
});
