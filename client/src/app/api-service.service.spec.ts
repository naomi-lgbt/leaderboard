import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiServiceService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
