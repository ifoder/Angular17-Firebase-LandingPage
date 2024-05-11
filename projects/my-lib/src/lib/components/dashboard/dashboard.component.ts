import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  inject,
  ViewContainerRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { I18nService } from 'src/app/services/i18n.services';
import { NavigationService } from '../../services/navigation.service';
import { SettingsService } from 'src/app/services/setting.service';
import { AuthService } from 'src/app/services/auth.service';
import { LayoutComponent } from '../shared/layout/layout.component';
import { MyLibModule } from '../../my-lib.module';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { Observable } from 'rxjs';
import { ICalendarEvent } from 'src/app/models/calendarEvents.interface';
import { Barber } from 'src/app/models/barbers.interface';
import { DatepickerService } from 'src/app/services/datepicker.service';
import { BarbersService } from 'src/app/services/barbers.service';
import { NzI18nService, uk_UA } from 'ng-zorro-antd/i18n';
import { NzModalService } from 'ng-zorro-antd/modal';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { ru, enUS, uk } from 'date-fns/locale';
import { NzModalCustomComponent } from 'src/app/admin/components/dashboard/modal/modal.component';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';

@Component({
  selector: 'fa-dashboard',
  standalone: true,
  imports: [
    LayoutComponent,
    MyLibModule,
    NzCalendarModule,
    SharedNgZorroAntdModule,
  ],
  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser = true;

  calendarEvents$!: Observable<ICalendarEvent[]>;
  barbers: Barber[] = [];

  isVisible = false;
  isOkLoading = false;

  _calendarService = inject(CalendarEventsService);
  calendarEvents = this._calendarService.$calendarEvents;
  totalCalendarEvents = this._calendarService.$totalCalendarEvents;

  _barberService = inject(BarbersService);

  constructor(
    private auth: AuthService,
    private settings: SettingsService,
    public navigation: NavigationService,
    private i18n: I18nService,
    private Nzi18n: NzI18nService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this._barberService.getBarbers().forEach((p) => (this.barbers = [...p]));
    console.log(this.calendarEvents());
  }

  ngOnDestroy() {}

  getBarber(id: any) {
    return this.barbers.find((m) => m.id == id);
  }

  getCellWithDate(date: Date) {
    console.log(this._calendarService.getCalendarEventsOfDate(date));

    return this._calendarService.getCalendarEventsOfDate(date);
  }

  showModal(date: Date): void {
    console.log(this._calendarService.$calendarEvents());
    this.createComponentModal(
      this._calendarService.getCalendarEventsOfDate(date),
      date
    );
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

  getTimelineColor(date: Date) {
    if (new Date(date).getTime() - new Date().getTime() < 0) return 'error';
    else return 'success';
  }
}
