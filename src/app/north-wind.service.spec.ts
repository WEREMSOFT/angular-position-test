import { TestBed } from '@angular/core/testing';

import { NorthWindService } from './north-wind.service';

describe('NorthWindService', () => {
  let service: NorthWindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorthWindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
