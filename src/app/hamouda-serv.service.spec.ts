import { TestBed } from '@angular/core/testing';

import { HamoudaServService } from './hamouda-serv.service';

describe('HamoudaServService', () => {
  let service: HamoudaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamoudaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
