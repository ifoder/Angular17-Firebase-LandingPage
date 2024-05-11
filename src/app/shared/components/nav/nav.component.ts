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
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { TranslationsService } from 'src/app/services/translations.service';
import { I18nService } from 'src/app/services/i18n.services';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    NgStyle,
    TranslatePipe,
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

  languageFormControl = 'uk';

  navItems = NAVITEMS;

  ngOnInit(): void {}

  changeLanguage($event: any) {
    this.i18n.langSig.set($event);
    this.settings.save();
  }
}
