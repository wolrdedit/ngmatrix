import { TestBed } from '@angular/core/testing';

import { NgmatrixService } from './ngmatrix.service';

describe('NgmatrixService', () => {
  let service: NgmatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
