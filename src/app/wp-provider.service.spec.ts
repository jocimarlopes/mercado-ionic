import { TestBed } from '@angular/core/testing';

import { WpProviderService } from './wp-provider.service';

describe('WpProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpProviderService = TestBed.get(WpProviderService);
    expect(service).toBeTruthy();
  });
});
