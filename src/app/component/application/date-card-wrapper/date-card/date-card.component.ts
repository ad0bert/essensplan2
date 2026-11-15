import { Component, computed, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { DateCard } from '../../../../models/DateCard';
import DateUtils from '../../../../util/DateUtil';

@Component({
  selector: 'app-date-card',
  imports: [DatePipe, MatButtonModule, MatCardModule, MatDividerModule, MatIconModule],
  templateUrl: './date-card.component.html',
  styleUrl: './date-card.component.scss',
})
export class DateCardComponent {
  readonly dateCard = input.required<DateCard>();
  readonly selected = input(false);

  protected readonly isToday = computed(() =>
    DateUtils.isSameDay(this.dateCard().date, DateUtils.getToday()),
  );

  addDish(): void {
    // Placeholder until dishes can be picked from the recipe search.
    this.dateCard().dishes.push('cat');
  }
}
