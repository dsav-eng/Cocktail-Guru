import { TestBed } from '@angular/core/testing';

import { CocktailServiceService } from './cocktail-service.service';

describe('CocktailServiceService', () => {
  let service: CocktailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
