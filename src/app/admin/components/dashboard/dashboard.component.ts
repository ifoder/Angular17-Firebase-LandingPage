import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NzI18nService, en_US, uk_UA } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'src/app/shared/model/calendarEvents';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { ru, enUS, uk } from 'date-fns/locale';

import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { DatepickerService } from 'src/app/services/datepicker.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzModalCustomComponent } from './modal/modal.component';
import { BarbersService } from 'src/app/services/barbers.service';
import { Barber } from 'src/app/shared/model/barbers.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SharedNgZorroAntdModule,
    SharedModule,
    NzModalCustomComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardAdminComponent implements OnInit {
  calendarEvents$!: Observable<CalendarEvent[]>;
  calendarEvents: CalendarEvent[] = [];
  barbers: Barber[] = [];

  isVisible = false;
  isOkLoading = false;

  days: number[] = [];

  _datepickerService = inject(DatepickerService);
  _barberService = inject(BarbersService);

  constructor(
    private i18n: NzI18nService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this._barberService.getBarbers().forEach((p) => (this.barbers = [...p]));

    this.calendarEvents$ = this._datepickerService.getCalendarEvents();
    this._datepickerService
      .getCalendarEvents()
      .forEach((p) => (this.calendarEvents = [...p]));
    this.i18n.setLocale(uk_UA);
    this.calendarEvents$.subscribe((p) => this.getDaysOfEvents());
  }

  getBarber(id: any) {
    return this.barbers.find((m) => m.id == id);
  }
  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  getDaysOfEvents() {
    let allDaysEvent: number[] = [];

    this.calendarEvents.forEach((d) => {
      allDaysEvent.push(+format(new Date(d.date.seconds * 1000), 'dd'));
    });
    this.days = allDaysEvent.filter((e, i) => allDaysEvent.indexOf(e) === i);
  }

  listDataEvent(date: Date) {
    let list = this.calendarEvents.filter(
      (f) =>
        format(new Date(f.date.seconds * 1000), 'dd/MM') ==
        format(date, 'dd/MM')
    );

    return list;
  }

  showModal(date: Date): void {
    let list = this.listDataEvent(date);
    this.createComponentModal(list, date);
    this.isVisible = true;
  }

  createComponentModal(list: CalendarEvent[], date: Date): void {
    let title = format(date, 'EEEE, d MMMM', { locale: uk });
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzData: { list: list, day: date },

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

  getTimelineColor(item: CalendarEvent) {
    if (item.date.seconds - Date.parse(new Date().toString()) / 1000 < 0)
      return 'error';
    else return 'success';
  }
}