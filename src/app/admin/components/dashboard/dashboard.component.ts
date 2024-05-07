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
  calendarEvents$!: Observable<ICalendarEvent[]>;
  calendarEvents: ICalendarEvent[] = [];
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

    // this.calendarEvents$ = this._datepickerService.getCalendarEvents();
    // this._datepickerService
    //   .getCalendarEvents()
    //   .forEach((p) => (this.calendarEvents = [...p]));
    this.i18n.setLocale(uk_UA);
    // this.calendarEvents$.subscribe((p) => this.getDaysOfEvents())
    this._datepickerService.getCalendarEvents().subscribe((calendarEvents) => {
      this.getDaysOfEvents();
      this._datepickerService.calendarEventsSig.set(calendarEvents);
    });
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

    this._datepickerService.calendarEventsSig().forEach((d) => {
      allDaysEvent.push(new Date(d.date).getDate());
      console.log(d.date);
    });
    this.days = allDaysEvent.filter((e, i) => allDaysEvent.indexOf(e) === i);
  }

  listDataEvent(date: Date) {
    let list = this._datepickerService.calendarEventsSig();
    list = list.filter(
      (f) => new Date(f.date).getDate() == new Date(date).getDate()
    );

    return list;
  }

  showModal(date: Date): void {
    let list = this.listDataEvent(date);
    this.createComponentModal(list, date);
    this.isVisible = true;
  }

  createComponentModal(list: ICalendarEvent[], date: Date): void {
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

  getTimelineColor(item: ICalendarEvent) {
    if (item.date.seconds - Date.parse(new Date().toString()) / 1000 < 0)
      return 'error';
    else return 'success';
  }
}
