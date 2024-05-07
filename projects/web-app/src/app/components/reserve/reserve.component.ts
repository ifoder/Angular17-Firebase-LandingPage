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
import { AuthService } from '../../services/auth.service';
import { ServicesService } from '../../services/services.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [
    SharedModule,
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

  IcalendarEvent?: ICalendarEvent = {};
  IcalendarEventsRef: any;
  IcalendarEvents$!: Observable<ICalendarEvent[]>;

  current = 0;
  timePicker = TIMEPICKER;
  price = PRICE;

  ngOnInit(): void {
    this.IcalendarEvents$ = this._datepickerService.getCalendarEvents();

    const serviceId = Number(this.route.snapshot.paramMap.get('service'));
    if (serviceId) this.current = 1;
  }

  setSelectedBarber($event: Barber) {
    this.current++;
    this.IcalendarEvent!.barber = $event.id;
    console.log(this.IcalendarEvent);
  }

  setSelectedService($event: Service) {
    this.current++;
    this.IcalendarEvent!.service = $event.id;
    console.log(this.IcalendarEvent);
  }

  setSelectedDate($event: any) {
    this.IcalendarEvent!.date = $event;
    this.submitForm({
      firstName: this.auth.currentUserSig()?.username,
      email: this.auth.currentUserSig()?.email,
    });
    this._storage.save('IcalendarEvent', this.IcalendarEvent);

    console.log(this.IcalendarEvent);

    this.router.navigate(['phone']);
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
