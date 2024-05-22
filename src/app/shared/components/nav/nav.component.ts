import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgFor,
  NgStyle,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { UserComponent } from '../user/user.component';
import { SharedModule } from '../../shared.module';
import { NAVITEMS } from '../../api';
import { SettingsService } from 'src/app/services/setting.service';
import { TranslationsService } from 'src/app/services/translations.service';
import { I18nService } from 'src/app/services/i18n.services';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    NgStyle,
    UserComponent,
    AsyncPipe,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  authService = inject(AuthService);
  translationService = inject(TranslationsService);
  i18n = inject(I18nService);
  settings = inject(SettingsService);
  contacts = inject(ContactsService);

  languageFormControl = 'uk';

  navItems = [
    { title: 'Home', link: '/home' },
    { title: 'about', link: '/about' },
    { title: 'gallery', link: '/gallery' },
    { title: 'feedback', link: '/feedback' },
    { title: 'price-list', link: '/services' },
    { title: 'contacts', link: '/clients' },
  ];

  ngOnInit(): void {}
}
