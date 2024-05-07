import { NgStyle } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { SharedModule } from '../../shared.module';
import { NAVITEMS } from '../../api';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationsService } from '../../../services/translations.service';
import { SettingsService } from '../../../services/setting.service';
import { AuthService } from '../../../services/auth.service';
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
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  authService = inject(AuthService);
  translationService = inject(TranslationsService);
  settings = inject(SettingsService);

  languageFormControl = 'uk';

  navItems = NAVITEMS;

  ngOnInit(): void {}

  changeLanguage($event: any) {
    // this.languageService.changeLanguage($event);
    this.settings.save();
  }
}
