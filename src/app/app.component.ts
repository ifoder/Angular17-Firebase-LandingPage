import {
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './admin/components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedModule } from './shared/shared.module';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

import { ICalendarEvent } from './models/calendarEvents.interface';
import { TranslationsService } from './services/translations.service';
import { I18nService } from './services/i18n.services';
import { CalendarEventsService } from './services/calendar-events.service';
import { timeout } from 'rxjs';
import { NzI18nService, en_US, uk_UA } from 'ng-zorro-antd/i18n';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    AboutComponent,

    NzLayoutModule,
    SharedModule,
    AsyncPipe,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // private languageService = inject(LanguageService);
  private authService = inject(AuthService);

  private calendarEvents = inject(CalendarEventsService);
  translationsService = inject(TranslationsService);
  contactsService = inject(ContactsService);
  // auth = inject(AngularFireAuth);
  i18n = inject(I18nService);
  Nzi18n = inject(NzI18nService);
  showLayoutTopBottom = signal<boolean>(true);

  calendarEvet: ICalendarEvent;

  ngOnInit(): void {
    this.Nzi18n.setLocale(uk_UA);

    this.calendarEvents.fetchData();
    this.authService.fetchAuth();
    this.contactsService.fetchData();
    this.translationsService.fetchTranslate();
    this.getTranslations();
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     if (event.url.substring(0, 6) == '/admin') {
    //       this.showLayoutTopBottom.set(false);
    //     }
    //   }
    // });
  }

  getTranslations() {
    this.translationsService.fetchTranslate();
    console.log(this.translationsService.$translations());
  }
}
