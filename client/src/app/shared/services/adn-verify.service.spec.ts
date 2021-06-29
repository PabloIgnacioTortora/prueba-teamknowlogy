import { TestBed } from '@angular/core/testing';

import { AdnVerifyService } from './adn-verify.service';

describe('AdnVerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdnVerifyService = TestBed.get(AdnVerifyService);
    expect(service).toBeTruthy();
  });
});
