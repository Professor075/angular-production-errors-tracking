import { TestBed } from '@angular/core/testing';

import { AngularProductionErrorsTrackingService } from './angular-production-errors-tracking.service';

describe('AngularProductionErrorsTrackingService', () => {
  let service: AngularProductionErrorsTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularProductionErrorsTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
