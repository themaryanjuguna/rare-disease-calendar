import { TestBed } from '@angular/core/testing';

import { RareDiseaseService } from './rare-disease.service';

describe('RareDiseaseService', () => {
  let service: RareDiseaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RareDiseaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
