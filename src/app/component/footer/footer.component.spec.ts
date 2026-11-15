import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [] });
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(FooterComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
