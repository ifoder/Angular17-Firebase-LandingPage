import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewContainerRef,
  inject,
  signal,
} from '@angular/core';
import { NzI18nService, en_US, uk_UA } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import { ICalendarEvent } from 'src/app/models/calendarEvents.interface';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { ru, enUS, uk } from 'date-fns/locale';

import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { BarbersService } from 'src/app/services/barbers.service';
import { Barber } from 'src/app/models/barbers.interface';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardAdminComponent implements OnInit {
  currentUser = true;

  calendarEvents$!: Observable<ICalendarEvent[]>;
  barbers: Barber[] = [];

  isVisible = false;
  isOkLoading = false;

  _calendarService = inject(CalendarEventsService);
  calendarEvents = this._calendarService.$calendarEvents;
  totalCalendarEvents = this._calendarService.$totalCalendarEvents;

  _barberService = inject(BarbersService);

  $currentEvent: any = signal('');
  currentEvent = this.$currentEvent;
  constructor(
    private i18n: NzI18nService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  sort(events: any) {
    this.calendarEvents().sort(
      (m, c) => new Date(m.date).getTime() - new Date(c.date).getTime()
    );

    return this.calendarEvents().filter(
      (m) => new Date(m.date).getTime() - new Date().getTime() > 0
    );
  }

  ngOnDestroy() {}

  getCellWithDate(date: Date) {
    return this._calendarService.getCalendarEventsOfDate(date);
  }

  getTimelineColor(item: ICalendarEvent) {
    if (new Date(item.date).getTime() - new Date().getTime() < 0) return 'red';
    else return 'green';
  }

  deleteEvent(event: ICalendarEvent) {}

  formatDate(date: Date) {
    const inputDate = new Date(date);
    const now = new Date();

    return inputDate.getDate() == now.getDate()
      ? format(inputDate, 'HH:mm')
      : format(inputDate, 'EEEE dd.MM HH:mm', { locale: uk });
  }
}
