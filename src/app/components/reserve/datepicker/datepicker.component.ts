import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { DATEUSE, TIMEPICKER } from '../../../shared/data';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';
import { SharedModule } from '../../../shared/shared.module';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, SharedModule, SharedNgZorroAntdModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  selectedTime: any;
  selectedDate: Date = new Date();
  timePicker = TIMEPICKER;

  _calendarEvents = inject(CalendarEventsService);
  calendarEvents = this._calendarEvents.$calendarEvents;

  ngOnInit(): void {
    this.disabledTime(this.selectedDate);
  }

  disabledDate = (current: Date): boolean => {
    let rre = differenceInCalendarDays(current, new Date()) < 0;
    this.disabledTime(current);
    if (this.timePicker.length < 1) return true;
    return rre;
  };

  selectDate($event: Date) {
    this.selectedTime = undefined;
    this.disabledTime($event);
  }

  disabledTime(current: Date) {
    const dayPicked = this._calendarEvents.getCalendarEventsOfDate(current);

    this.timePicker = TIMEPICKER;
    this.timePicker.filter((n) => dayPicked);
    dayPicked.forEach(
      (dt) =>
        (this.timePicker = this.timePicker.filter(
          (t) => format(new Date(dt.date), 'HH:mm') != t
        ))
    );
  }

  selectTime($event: any) {
    let time = $event.split(':');
    this.selectedDate.setHours(time[0], time[1], 0);
  }

  clickNext() {
    this.clickEvent.emit(this.selectedDate);
  }
}
