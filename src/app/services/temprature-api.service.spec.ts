import { TestBed } from '@angular/core/testing';

import { TempratureApiService } from './temprature-api.service';

describe('TempratureApiService', () => {
  let service: TempratureApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempratureApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
