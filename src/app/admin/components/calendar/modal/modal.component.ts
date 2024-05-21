import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { Barber } from 'src/app/models/barbers.interface';
import { ICalendarEvent } from 'src/app/models/calendarEvents.interface';
import { Service } from 'src/app/models/service.interface';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { BarbersService } from 'src/app/services/barbers.service';
import { ServicesService } from 'src/app/services/services.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { DatepickerService } from 'src/app/services/datepicker.service';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';

@Component({
  selector: 'nz-modal-custom-component',
  standalone: true,
  imports: [SharedNgZorroAntdModule, SharedModule, DatePipe],
  templateUrl: './modal.component.html',
})
export class NzModalCustomComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;

  barbers: Barber[] = [];
  services: Service[] = [];
  hiddenAdd = false;
  dateEvent: any;
  time: Date | null = null;
  disabledHour = [1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23, 0];
  modalData: any = inject(NZ_MODAL_DATA);
  _barberService = inject(BarbersService);
  _servicesService = inject(ServicesService);
  _calendarService = inject(CalendarEventsService);
  $currentEvent = signal(
    this._calendarService.getCalendarEventsOfDate(this.modalData.date)
  );

  constructor(private modal: NzModalRef) {}

  ngOnInit(): void {
    this.$currentEvent.set(
      this.$currentEvent().sort((m, c) => m.date - c.date)
    );
    console.log(this.$currentEvent);

    this.dateEvent = {
      date: '',
      service: '',
      user: { username: '' },
    };
  }

  getTimelineColor(item: ICalendarEvent) {
    if (new Date(item.date).getTime() - new Date().getTime()) return 'red';
    else return 'green';
  }

  disabledHours() {
    return () => this.disabledHour;
  }

  getBarber(id: any) {
    return this.barbers.find((m) => m.id == id);
  }
  getService(id: any) {
    return this.services.find((m) => m.id == id);
  }
  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }

  addRow() {
    this.hiddenAdd = true;
  }

  submitForm() {
    this.hiddenAdd = false;

    let time = format(this.time!, 'HH:mm').split(':');

    this.modalData.date.setHours(time[0], time[1], 0);
    this.dateEvent.date = this.modalData.day;

    this._calendarService.addCalendarEvent(this.dateEvent);

    console.log(this.dateEvent);
  }

  deleteEvent(item: ICalendarEvent) {
    this._calendarService.deleteCalendarEvents(item.id);
  }
}
