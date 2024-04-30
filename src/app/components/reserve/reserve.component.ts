import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { SharedModule } from '../../shared/shared.module';
import {
  PRICE,
  SERVICES,
  SERVICESCATEGORY,
  TIMEPICKER,
} from '../../shared/data';
import {
  CategoryServices,
  Service,
} from '../../shared/model/service.interface';
import { BarbersComponent } from './barbers/barbers.component';
import { Barber } from '../../shared/model/barbers.interface';
import { ServicesComponent } from './services/services.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerService } from '../../services/datepicker.service';
import { UserformComponent } from './userform/userform.component';
import { CorrectComponent } from './correct/correct.component';
import { CalendarEvent } from '../../shared/model/calendarEvents';
import {
  Firestore,
  collection,
  collectionData,
  getDocs,
} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { BreadcrumpComponent } from 'src/app/global/breadcrump/breadcrump.component';
import { AuthService } from 'src/app/services/auth.service';

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
  current = 0;
  timePicker = TIMEPICKER;
  price = PRICE;
  calendarEvent?: CalendarEvent = {};
  calendarEventsRef: any;

  calendarEvents$!: Observable<CalendarEvent[]>;

  _datepickerService = inject(DatepickerService);
  _servicesService = inject(ServicesService);

  ngOnInit(): void {
    this.calendarEvents$ = this._datepickerService.getCalendarEvents();

    const serviceId = Number(this.route.snapshot.paramMap.get('service'));
    if (serviceId) this.current = 1;

    // this._servicesService.addServicesCategory({
    //   id: new Date().getTime().toString(),
    //   title: 'balby',
    // } as CategoryServices);

    // this._servicesService.deleteServicesCategory('1713396408230');
  }

  submitForm($event: any) {
    this.current++;

    this.calendarEvent!.firstName = $event.firstName;
    // this.calendarEvent!.phone = $event.phoneNumber;
    this.calendarEvent!.email = $event.email;
    console.log(this.calendarEvent);

    this._datepickerService.addCalendarEvent({
      id: new Date().getMilliseconds().toString(),
      ...this.calendarEvent,
    } as CalendarEvent);
    console.log('Created new item successfully!');
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
    this.current++;
    this.calendarEvent!.date = $event;
    if (this.auth.currentUserSig())
      this.submitForm({
        firstName: this.auth.currentUserSig()?.username,
        email: this.auth.currentUserSig()?.email,
      });
    console.log(this.calendarEvent);
  }
}
