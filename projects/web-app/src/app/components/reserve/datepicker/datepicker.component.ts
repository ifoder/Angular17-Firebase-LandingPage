import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { DATEUSE, TIMEPICKER } from '../../../shared/data';
import { SharedModule } from '../../../shared/shared.module';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { DatepickerService } from '../../../services/datepicker.service';
import { NzI18nService, en_US, uk_UA } from 'ng-zorro-antd/i18n';
import { Observable, timestamp } from 'rxjs';
import { ICalendarEvent } from '../../../models/calendarEvents.interface';

// Sun Mar 31 2024 14:00:00 GMT+0200 (Центральная Европа, летнее время)'
@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent implements OnInit {
  @Output() datePickEvent = new EventEmitter();
  @Output() timePickEvent = new EventEmitter();
  @Output() clickEvent = new EventEmitter();

  calendarEvents$!: Observable<ICalendarEvent[]>;

  calendarEvents: ICalendarEvent[] = [];
  selectedTime: any;
  selectedDate: Date = new Date();
  timePicker = TIMEPICKER;

  _datepickerService = inject(DatepickerService);

  constructor(private i18n: NzI18nService) {}

  ngOnInit(): void {
    this.calendarEvents$ = this._datepickerService.getCalendarEvents();
    this._datepickerService
      .getCalendarEvents()
      .forEach((p) => (this.calendarEvents = [...p]));
    this.i18n.setLocale(en_US);
    this.disabledTime(this.selectedDate);
  }

  disabledTime(current: Date) {
    // let dayPicked = this.calendarEvents.filter((g) => {
    //   return format(current, 'dd/MM') == format(new Date(g.date!), 'dd/MM');
    // });

    let dayPicked: ICalendarEvent[] = [];
    this.calendarEvents.forEach((g) => {
      if (
        format(current, 'dd/MM') ==
        format(new Date(g.date.seconds * 1000), 'dd/MM')
      )
        dayPicked.push(g);
    });

    this.timePicker = TIMEPICKER;
    dayPicked.forEach(
      (dt) =>
        (this.timePicker = this.timePicker.filter(
          (t) => format(new Date(dt.date.seconds * 1000), 'HH:mm') != t
        ))
    );
  }

  disabledDate = (current: Date): boolean => {
    let rre = differenceInCalendarDays(current, new Date()) < 0;
    // this.disabledTime(current);
    if (this.timePicker.length < 1) return true;
    return rre;
  };

  selectDate($event: any) {
    this.datePickEvent.emit($event);
    this.disabledTime($event);
  }

  clickNext($event: any) {
    this.clickEvent.emit(this.selectedDate);
  }

  selectTime($event: any) {
    this.timePickEvent.emit($event);
    let time = $event.split(':');
    this.selectedDate.setHours(time[0], time[1], 0);
    this.datePickEvent.emit(this.selectedDate);
  }
}
