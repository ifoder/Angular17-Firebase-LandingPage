import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CalendarEvent } from 'src/app/shared/model/calendarEvents';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';

@Component({
  selector: 'app-correct',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SharedNgZorroAntdModule, DatePipe],
  templateUrl: './correct.component.html',
  styleUrl: './correct.component.css',
})
export class CorrectComponent {
  @Input() calendarEvent?: CalendarEvent;
}
