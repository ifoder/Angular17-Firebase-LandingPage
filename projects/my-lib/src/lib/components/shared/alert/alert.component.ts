import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { MyLibModule } from '../../../my-lib.module';

@Component({
  selector: 'fa-alert',
  standalone: true,
  imports: [MyLibModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(public alert: AlertService) {}

  ngOnInit() {}

  dismissAlert(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.alert.clear();
  }
}
