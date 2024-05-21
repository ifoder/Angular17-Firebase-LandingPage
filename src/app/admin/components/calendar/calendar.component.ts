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
import { DatepickerService } from 'src/app/services/datepicker.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzModalCustomComponent } from './modal/modal.component';
import { BarbersService } from 'src/app/services/barbers.service';
import { Barber } from 'src/app/models/barbers.interface';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    SharedNgZorroAntdModule,
    SharedModule,
    NzModalCustomComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarAdminComponent implements OnInit {
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

  ngOnInit(): void {
    this.setCurrentEvent();
  }

  ngOnDestroy() {}

  getCellWithDate(date: Date) {
    return this._calendarService.getCalendarEventsOfDate(date);
  }

  setCurrentEvent(date?: Date) {
    if (!date)
      this.$currentEvent.set(
        this._calendarService.getCalendarEventsOfDate(new Date())
      );
    else
      this.$currentEvent.set(
        this._calendarService.getCalendarEventsOfDate(date!)
      );
    console.log(this.$currentEvent());
  }

  showModal(date: Date): void {
    let list = this._calendarService.getCalendarEventsOfDate(date);
    console.log(list);

    this.createComponentModal(list, date);
    this.isVisible = true;
  }

  createComponentModal(list: ICalendarEvent[], date: Date): void {
    let title = format(date, 'EEEE, d MMMM', { locale: uk });
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzData: { date: date },

      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe((result) =>
      console.log('[afterClose] The result is:', result)
    );

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  getTimelineColor(item: ICalendarEvent) {
    if (new Date(item.date).getTime() - new Date().getTime()) return 'error';
    else return 'success';
  }
}
