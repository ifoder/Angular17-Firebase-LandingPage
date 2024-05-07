import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';
import { ICalendarEvent } from '../../../models/calendarEvents.interface';

@Component({
  selector: 'app-correct',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SharedNgZorroAntdModule, DatePipe],
  templateUrl: './correct.component.html',
  styleUrl: './correct.component.css',
})
export class CorrectComponent {
  @Input() calendarEvent?: ICalendarEvent;
}
