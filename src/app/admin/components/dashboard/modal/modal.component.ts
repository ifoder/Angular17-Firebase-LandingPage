import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { Barber } from 'src/app/shared/model/barbers.interface';
import { CalendarEvent } from 'src/app/shared/model/calendarEvents';
import { Service } from 'src/app/shared/model/service.interface';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { BarbersService } from 'src/app/services/barbers.service';
import { ServicesService } from 'src/app/services/services.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { DatepickerService } from 'src/app/services/datepicker.service';

@Component({
  selector: 'nz-modal-custom-component',
  standalone: true,
  imports: [SharedNgZorroAntdModule, CommonModule, SharedModule],
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
  nzModalData: CalendarEvent[];
  _barberService = inject(BarbersService);
  _servicesService = inject(ServicesService);
  _datepickerService = inject(DatepickerService);

  constructor(private modal: NzModalRef) {}

  ngOnInit(): void {
    this._barberService.getBarbers().forEach((p) => (this.barbers = [...p]));
    this._servicesService
      .getServices()
      .forEach((p) => (this.services = [...p]));
    this.nzModalData = this.modalData.list;
    this.nzModalData = this.nzModalData.sort((m, c) => m.date - c.date);

    this.dateEvent = {
      id: new Date().getMilliseconds().toString(),
      date: '',
      service: '',
      firstName: '',
      phone: '',
    };
  }

  getTimelineColor(item: CalendarEvent) {
    if (item.date.seconds - Date.parse(new Date().toString()) / 1000 < 0)
      return 'red';
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

    this.modalData.day.setHours(time[0], time[1], 0);
    this.dateEvent.date = this.modalData.day;

    this._datepickerService.addCalendarEvent(this.dateEvent);
  }
}
