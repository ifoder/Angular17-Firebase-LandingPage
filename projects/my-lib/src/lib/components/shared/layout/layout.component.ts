import { Component, OnInit, AfterViewInit } from '@angular/core';

import { SettingsService } from 'src/app/services/setting.service';
import { MyLibModule } from '../../../my-lib.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'fa-layout',
  standalone: true,
  imports: [
    MyLibModule,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AlertComponent,
  ],

  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  constructor(public settings: SettingsService) {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
