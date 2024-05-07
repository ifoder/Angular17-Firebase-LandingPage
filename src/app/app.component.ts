import { Component, OnInit, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    AboutComponent,
    ReserveComponent,
    ClientsComponent,

    FeedbackComponent,
    GalleryComponent,
    NavComponent,
    ServicesComponent,
    FooterComponent,
    NzLayoutModule,
    SharedModule,
    TranslatePipe,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // private languageService = inject(LanguageService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private storage = inject(StorageService);
  private sms = inject(NotificationService);
  private datePicker = inject(DatepickerService);
  translationsService = inject(TranslationsService);
  i18n = inject(I18nService);
  showLayoutTopBottom = signal<boolean>(true);

  calendarEvet: ICalendarEvent;

  ngOnInit(): void {
    // this.languageService.initLanguage();
    this.getTranslations();
    this.ifAuthUser();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.substring(0, 6) == '/admin') {
          this.showLayoutTopBottom.set(false);
        }
      }
    });
  }

  ifAuthUser() {
    this.authService.user$.subscribe((user) => {
      let currentUser: User = new User();
      if (user) {
        if (!user.email && this.storage.getUser()?.email) {
          onAuthStateChanged(this.authService.firebaseAuth, () => {
            updateEmail(
              this.authService.firebaseAuth.currentUser!,
              this.storage.getUser()?.email!
            );
          });
        }

        currentUser = {
          email: user.email!,
          username: user.displayName!,
          uid: user.uid,
          admin: this.authService.isAdmin(user.email!),
          phone: user.phoneNumber!,
          photoURL: user.photoURL!,
        };
        this.authService.currentUserSig.set(currentUser);
        this.ifStorageReservace();
      } else {
        this.authService.currentUserSig.set(null);
        this.storage.clean();
      }
      // console.log(this.authService.currentUserSig());
    });
  }

  ifStorageReservace() {
    if (this.storage.get('calendarEvent') && this.authService.isLoggedIn()) {
      this.datePicker.addCalendarEvent({
        ...this.storage.get('calendarEvent'),
        user: this.storage.getUser(),
      } as ICalendarEvent);
      this.storage.remove('calendarEvent');
      this.sms.createNotification(
        'success',
        'Послуга зарезервована!',
        'Ви можете переглянути ваші бронювання в профілі!'
      );
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 1000);
      this.router.navigate(['home']);
    }
  }

  getTranslations() {
    this.translationsService.getAll().subscribe((translations) => {
      this.translationsService.translationsDataSig.set(translations);
      console.log(translations['en']);
    });
  }
}
