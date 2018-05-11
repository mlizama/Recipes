import { TestBed, inject } from '@angular/core/testing';
import { SaverecipeService } from './saverecipe.service';

describe('SaverecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaverecipeService]
    });
  });

  it('should be created', inject([SaverecipeService], (service: SaverecipeService) => {
    expect(service).toBeTruthy();
  }));
});
