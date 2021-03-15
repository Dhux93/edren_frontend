import { TestBed } from '@angular/core/testing';

import { ArchiverosService } from './archiveros.service';

describe('ArchiverosService', () => {
  let service: ArchiverosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiverosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
