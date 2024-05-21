import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SharedNgZorroAntdModule } from '../../ng-zorro.module';
import { SharedModule } from '../../shared.module';
import { SignInService } from 'src/app/services/signin.service';
import { AuthService } from 'src/app/services/auth.service';
import { TranslationsService } from 'src/app/services/translations.service';
import { I18nService } from 'src/app/services/i18n.services';
import { SettingsService } from 'src/app/services/setting.service';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterLink, CommonModule, SharedNgZorroAntdModule, SharedModule],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  _signIn = inject(SignInService);
  _auth = inject(AuthService);
  router = inject(Router);
  translationService = inject(TranslationsService);
  i18n = inject(I18nService);
  settings = inject(SettingsService);

  $user = computed(() => this._auth.$user());

  ngOnInit(): void {}

  logout(): void {
    this._auth.logout();
  }

  changeLanguage($event: any) {
    this.i18n.setLanguage($event);
    console.log(this.i18n.langSig());
  }
}
