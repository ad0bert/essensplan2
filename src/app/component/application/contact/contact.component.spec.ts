import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('only enables submit for a complete form', async () => {
    const fixture = TestBed.createComponent(ContactComponent);
    await fixture.whenStable();
    const form = fixture.componentInstance['contactForm'];
    expect(form.valid).toBe(false);
    form.setValue({ email: 'a@example.com', subject: 'Hi', textarea: 'Hello' });
    expect(form.valid).toBe(true);
  });
});
