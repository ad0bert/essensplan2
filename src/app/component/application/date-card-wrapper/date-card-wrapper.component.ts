import { Component, OnInit } from '@angular/core';
import { DateCard } from 'src/app/models/DateCard';
import DateUtils from 'src/app/util/DateUtil';

@Component({
  selector: 'app-date-card-wrapper',
  templateUrl: './date-card-wrapper.component.html',
  styleUrls: ['./date-card-wrapper.component.scss']
})
export class DateCardWrapperComponent implements OnInit {

  private DAYS_OF_WEEK = 7;
  dateCards: DateCard[] = [];
  selectedCard = -1;

  constructor() {
    this.fillWeekFromNow(0);
  }

  ngOnInit() {
  }

  fillWeekFromNow(offset: number): void {
    const monday = DateUtils.getStartOfWeek(
      offset === 0 ? DateUtils.getToday() :
        DateUtils.addDays(this.dateCards[0].date, offset * this.DAYS_OF_WEEK)
    );
    this.dateCards = [];
    this.selectedCard = -1;
    for (let i = 0; i < this.DAYS_OF_WEEK; i++) {
      const dateCard = new DateCard;
      dateCard.date = DateUtils.addDays(monday, i);
      if (dateCard.date.getTime() === DateUtils.getToday().getTime()) {
        this.selectedCard = i;
      }
      this.dateCards.push(dateCard);
    }
    if (this.selectedCard === -1) {
      this.selectedCard = 0;
    }
  }

}
