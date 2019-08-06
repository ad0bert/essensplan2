import { Component, OnInit, Input } from '@angular/core';
import { DateCard } from 'src/app/models/DateCard';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.scss']
})
export class DateCardComponent implements OnInit {

  @Input()
  dateCard: DateCard;

  @Input()
  selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
