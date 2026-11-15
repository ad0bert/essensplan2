import { TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [] });
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(SearchbarComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
