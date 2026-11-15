import { TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';

describe('RecipeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [] });
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(RecipeComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
