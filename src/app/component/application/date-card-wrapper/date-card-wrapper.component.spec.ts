import { ComponentFixture, TestBed } from '@angular/core/testing';

import DateUtils from '../../../util/DateUtil';
import { DateCardWrapperComponent } from './date-card-wrapper.component';

describe('DateCardWrapperComponent', () => {
  let fixture: ComponentFixture<DateCardWrapperComponent>;
  let element: HTMLElement;

  const firstDate = () =>
    element.querySelector('app-date-card .date-container')?.textContent?.trim();

  beforeEach(async () => {
    fixture = TestBed.createComponent(DateCardWrapperComponent);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('shows the seven days of the current week, starting on Monday', () => {
    expect(element.querySelectorAll('app-date-card').length).toBe(7);
    const monday = DateUtils.getStartOfWeek(DateUtils.getToday());
    expect(firstDate()).toContain(String(monday.getDate()));
  });

  it('selects today', () => {
    const todayIndex = (DateUtils.getToday().getDay() + 6) % 7;
    const cards = element.querySelectorAll('app-date-card mat-card');
    expect(cards[todayIndex].classList).toContain('selected-style');
    expect(cards[todayIndex].classList).toContain('today-style');
  });

  it('moves a week forward and back', async () => {
    const next = DateUtils.getStartOfWeek(DateUtils.addDays(DateUtils.getToday(), 7));
    (element.querySelector('[aria-label="Next week"]') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(firstDate()).toContain(String(next.getDate()));
    expect(element.querySelectorAll('.today-style').length).toBe(0);

    (element.querySelector('[aria-label="Previous week"]') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(element.querySelectorAll('.today-style').length).toBe(1);
  });
});
