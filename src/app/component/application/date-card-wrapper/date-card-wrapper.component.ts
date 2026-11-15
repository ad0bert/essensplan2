import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DateCard } from '../../../models/DateCard';
import DateUtils from '../../../util/DateUtil';
import { DateCardComponent } from './date-card/date-card.component';

const DAYS_OF_WEEK = 7;

@Component({
  selector: 'app-date-card-wrapper',
  imports: [DateCardComponent, MatButtonModule, MatIconModule],
  templateUrl: './date-card-wrapper.component.html',
  styleUrl: './date-card-wrapper.component.scss',
})
export class DateCardWrapperComponent {
  protected readonly dateCards = signal<DateCard[]>([]);
  protected readonly selectedCard = signal(0);

  constructor() {
    this.fillWeekFromNow(0);
  }

  /** Shows the current week (offset 0) or moves `offset` weeks from the displayed one. */
  fillWeekFromNow(offset: number): void {
    const current = this.dateCards();
    const reference =
      offset === 0 || current.length === 0
        ? DateUtils.getToday()
        : DateUtils.addDays(current[0].date, offset * DAYS_OF_WEEK);
    const monday = DateUtils.getStartOfWeek(reference);
    const today = DateUtils.getToday();

    const cards: DateCard[] = [];
    let selected = 0;
    for (let i = 0; i < DAYS_OF_WEEK; i++) {
      const date = DateUtils.addDays(monday, i);
      if (DateUtils.isSameDay(date, today)) {
        selected = i;
      }
      cards.push({ date, dishes: [] });
    }
    this.dateCards.set(cards);
    this.selectedCard.set(selected);
  }
}
