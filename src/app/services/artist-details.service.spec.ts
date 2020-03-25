import { TestBed } from '@angular/core/testing';

import { ArtistDetailsService } from './artist-details.service';

describe('ArtistDetailsService', () => {
  let service: ArtistDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
