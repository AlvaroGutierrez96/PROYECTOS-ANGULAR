import { TestBed } from '@angular/core/testing';

import { ServiciopersonasService } from './serviciopersonas.service';

describe('ServiciopersonasService', () => {
  let service: ServiciopersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
