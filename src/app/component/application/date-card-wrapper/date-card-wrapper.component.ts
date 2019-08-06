import { Component, OnInit } from '@angular/core';
import { DateCard } from 'src/app/models/DateCard';

@Component({
  selector: 'app-date-card-wrapper',
  templateUrl: './date-card-wrapper.component.html',
  styleUrls: ['./date-card-wrapper.component.scss']
})
export class DateCardWrapperComponent implements OnInit {
  
  private DAYS_OF_WEEK = 7;
  dateCards: DateCard[] = [];
  selectedCard = 3;

  constructor() {
    let offset = -3;
    for (let i = 0; i < this.DAYS_OF_WEEK; i++) {
      const dateCard = new DateCard;
      dateCard.date = new Date();
      dateCard.date.setDate(dateCard.date.getDate() + offset++);
      this.dateCards.push(dateCard);
    }
  }

  ngOnInit() {
  }

}
