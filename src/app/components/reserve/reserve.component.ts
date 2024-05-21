import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { SharedModule } from '../../shared/shared.module';
import { PRICE, TIMEPICKER } from '../../shared/data';
import { Service } from '../../models/service.interface';
import { BarbersComponent } from './barbers/barbers.component';
import { Barber } from '../../models/barbers.interface';
import { ServicesComponent } from './services/services.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerService } from '../../services/datepicker.service';
import { UserformComponent } from './userform/userform.component';
import { CorrectComponent } from './correct/correct.component';
import { ICalendarEvent } from '../../models/calendarEvents.interface';

import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    SharedNgZorroAntdModule,
    BarbersComponent,
    ServicesComponent,
    DatepickerComponent,
    UserformComponent,
    CorrectComponent,
    DatePipe,
    LayoutComponent,
  ],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css',
})
export class ReserveComponent implements OnInit {
  private auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  _calendarEventService = inject(CalendarEventsService);
  _servicesService = inject(ServicesService);
  _storage = inject(StorageService);

  calendarEvent?: ICalendarEvent = {};
  calendarEventsRef: any;

  current = 0;
  timePicker = TIMEPICKER;
  price = PRICE;

  ngOnInit(): void {
    const serviceId = Number(this.route.snapshot.paramMap.get('service'));
    if (serviceId) this.current = 1;
  }

  setSelectedBarber($event: Barber) {
    this.current++;
    this._calendarEventService.$currentReserve.update(
      (calendarEvent) => (calendarEvent = { ...calendarEvent, barber: $event })
    );

    this.calendarEvent!.barber = $event.id;
  }

  setSelectedService($event: Service) {
    this.current++;
    this._calendarEventService.$currentReserve.update(
      (calendarEvent) => (calendarEvent = { ...calendarEvent, service: $event })
    );
    this.calendarEvent!.service = $event.id;
  }

  setSelectedDate($event: Date) {
    this.calendarEvent!.date = $event;
    this._calendarEventService.$currentReserve.update(
      (calendarEvent) => (calendarEvent = { ...calendarEvent, date: $event })
    );
    if (this.auth.isAuth()) {
      this._calendarEventService.compliteReservace();
      this.router.navigate(['home']);
    } else {
      this._calendarEventService.compliteReservace();
    }
  }

  submitForm($event: any) {
    // this.current++;
    // this.IcalendarEvent!.firstName = $event.firstName;
    // this.IcalendarEvent!.email = $event.email;
    // console.log(this.IcalendarEvent);
    // this._datepickerService.addICalendarEvent({
    //   id: new Date().getMilliseconds().toString(),
    //   ...this.IcalendarEvent,
    // } as ICalendarEvent);
    // console.log('Created new item successfully!');
  }
}
