import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { differenceInCalendarDays, setHours, format } from 'date-fns';
import { ru, enUS, uk } from 'date-fns/locale';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { CalendarEventsService } from 'src/app/services/calendar-events.service';
import { ICalendarEvent } from 'src/app/models/calendarEvents.interface';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'edit-user-app',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    CommonModule,
    SharedNgZorroAntdModule,
    SharedModule,
    NgStyle,
    LayoutComponent,
  ],
  templateUrl: './editUser.component.html',
  styleUrl: './editUser.component.css',
})
export class EditUserComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);
  currentUser$ = computed(() => this.authService.$user());
  _calendarService = inject(CalendarEventsService);
  calendarEvents = this._calendarService.$calendarEvents;

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
    // phoneNumber: new FormControl<string>('', Validators.required),
  }>;

  constructor(
    private storage: StorageService,
    private fb: NonNullableFormBuilder
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
      // phoneNumber: new FormControl<string>('', Validators.required),
    });
  }

  ngOnInit(): void {
    // console.log(this.authService.currentUserSig());
  }

  sort(events: any) {
    this.calendarEvents().sort(
      (m, c) => new Date(m.date).getTime() - new Date(c.date).getTime()
    );

    return this.calendarEvents().filter(
      (m) => m.user.email == this.authService.$user()?.email
    );
  }

  ngOnDestroy() {}

  getCellWithDate(date: Date) {
    return this._calendarService.getCalendarEventsOfDate(date);
  }

  getTimelineColor(item: ICalendarEvent) {
    if (new Date(item.date).getTime() - new Date().getTime() < 0) return 'red';
    else return 'green';
  }

  deleteEvent(event: ICalendarEvent) {}

  formatDate(date: Date) {
    const inputDate = new Date(date);
    const now = new Date();

    return inputDate.getDate() == now.getDate()
      ? format(inputDate, 'h:mm')
      : format(inputDate, 'EEEE dd.MM h:mm', { locale: uk });
  }
}
