import { TestBed, inject } from '@angular/core/testing';

import { GetrecipesService } from './getrecipes.service';

describe('GetrecipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetrecipesService]
    });
  });

  it('should be created', inject([GetrecipesService], (service: GetrecipesService) => {
    expect(service).toBeTruthy();
  }));
});
