import { ComponentFixture, TestBed } from '@angular/core/testing';

import DateUtils from '../../../../util/DateUtil';
import { DateCardComponent } from './date-card.component';

describe('DateCardComponent', () => {
  let fixture: ComponentFixture<DateCardComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DateCardComponent);
    fixture.componentRef.setInput('dateCard', { date: DateUtils.getToday(), dishes: [] });
    await fixture.whenStable();
  });

  it('marks today', () => {
    const card = (fixture.nativeElement as HTMLElement).querySelector('mat-card');
    expect(card?.classList).toContain('today-style');
  });

  it('adds a dish', async () => {
    const element = fixture.nativeElement as HTMLElement;
    (element.querySelector('[aria-label="Add dish"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelectorAll('.dish-container').length).toBe(1);
  });
});
