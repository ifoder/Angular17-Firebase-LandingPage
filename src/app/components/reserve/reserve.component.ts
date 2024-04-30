import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { SharedModule } from '../../shared/shared.module';
import { PRICE, TIMEPICKER } from '../../shared/data';
import { Service } from '../../shared/model/service.interface';
import { BarbersComponent } from './barbers/barbers.component';
import { Barber } from '../../shared/model/barbers.interface';
import { ServicesComponent } from './services/services.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerService } from '../../services/datepicker.service';
import { UserformComponent } from './userform/userform.component';
import { CorrectComponent } from './correct/correct.component';
import { CalendarEvent } from '../../shared/model/calendarEvents';

import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

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
  ],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css',
})
export class ReserveComponent implements OnInit {
  private auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  _datepickerService = inject(DatepickerService);
  _servicesService = inject(ServicesService);
  _storage = inject(StorageService);

  calendarEvent?: CalendarEvent = {};
  calendarEventsRef: any;
  calendarEvents$!: Observable<CalendarEvent[]>;

  current = 0;
  timePicker = TIMEPICKER;
  price = PRICE;

  ngOnInit(): void {
    this.calendarEvents$ = this._datepickerService.getCalendarEvents();

    const serviceId = Number(this.route.snapshot.paramMap.get('service'));
    if (serviceId) this.current = 1;
  }

  setSelectedBarber($event: Barber) {
    this.current++;
    this.calendarEvent!.barber = $event.id;
    console.log(this.calendarEvent);
  }

  setSelectedService($event: Service) {
    this.current++;
    this.calendarEvent!.service = $event.id;
    console.log(this.calendarEvent);
  }

  setSelectedDate($event: any) {
    this.calendarEvent!.date = $event;
    this.submitForm({
      firstName: this.auth.currentUserSig()?.username,
      email: this.auth.currentUserSig()?.email,
    });
    this._storage.save('calendarEvent', this.calendarEvent);

    console.log(this.calendarEvent);

    this.router.navigate(['phone']);
  }

  submitForm($event: any) {
    // this.current++;
    // this.calendarEvent!.firstName = $event.firstName;
    // this.calendarEvent!.email = $event.email;
    // console.log(this.calendarEvent);
    // this._datepickerService.addCalendarEvent({
    //   id: new Date().getMilliseconds().toString(),
    //   ...this.calendarEvent,
    // } as CalendarEvent);
    // console.log('Created new item successfully!');
  }
}
