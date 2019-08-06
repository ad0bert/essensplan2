import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCardWrapperComponent } from './date-card-wrapper.component';

describe('DateCardWrapperComponent', () => {
  let component: DateCardWrapperComponent;
  let fixture: ComponentFixture<DateCardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCardWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
