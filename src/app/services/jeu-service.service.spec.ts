import { TestBed } from '@angular/core/testing';

import { JeuServiceService } from './jeu-service.service';

describe('JeuServiceService', () => {
  let service: JeuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
