import { TestBed } from '@angular/core/testing';

import { TwittService } from './twitt.service';

describe('TwittService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwittService = TestBed.get(TwittService);
    expect(service).toBeTruthy();
  });
});
