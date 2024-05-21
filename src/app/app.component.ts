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
import { ClientsComponent } from './components/clients/clients.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedModule } from './shared/shared.module';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { User } from './models/user.interface';
import { updateEmail, onAuthStateChanged } from 'firebase/auth';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DatepickerService } from './services/datepicker.service';
import { ICalendarEvent } from './models/calendarEvents.interface';
import { NotificationService } from './services/notification.service';
import { TranslationsService } from './services/translations.service';
import { I18nService } from './services/i18n.services';
import { TranslatePipe } from './pipes/translate.pipe';
import { CalendarEventsService } from './services/calendar-events.service';
import { timeout } from 'rxjs';
import { NzI18nService, en_US, uk_UA } from 'ng-zorro-antd/i18n';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LayoutComponent } from './shared/components/layout/layout.component';

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
    TranslatePipe,
    AsyncPipe,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // private languageService = inject(LanguageService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private storage = inject(StorageService);
  private datePicker = inject(DatepickerService);

  private calendarEvents = inject(CalendarEventsService);
  translationsService = inject(TranslationsService);
  // auth = inject(AngularFireAuth);
  i18n = inject(I18nService);
  Nzi18n = inject(NzI18nService);
  showLayoutTopBottom = signal<boolean>(true);

  calendarEvet: ICalendarEvent;

  ngOnInit(): void {
    this.Nzi18n.setLocale(uk_UA);

    this.calendarEvents.fetchData();
    this.authService.fetchAuth();
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
