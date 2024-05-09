import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { I18nService } from 'src/app/services/i18n.services';
import { NavigationService } from '../../services/navigation.service';
import { SettingsService } from 'src/app/services/setting.service';
import { AuthService } from 'src/app/services/auth.service';
import { LayoutComponent } from '../shared/layout/layout.component';
import { MyLibModule } from '../../my-lib.module';

@Component({
  selector: 'fa-dashboard',
  standalone: true,
  imports: [LayoutComponent, MyLibModule],
  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser = true;
  constructor(
    private auth: AuthService,
    private settings: SettingsService,
    public navigation: NavigationService,
    private i18n: I18nService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
