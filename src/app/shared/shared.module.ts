import {
  CommonModule,
  DatePipe,
  NgClass,
  NgFor,
  NgStyle,
} from '@angular/common';
import { NgModule } from '@angular/core';

import {
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { FIREBASECONFIG } from './api';
import { SharedNgZorroAntdModule } from './ng-zorro.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const EXPORT = [
  CommonModule,

  FormsModule,
  ReactiveFormsModule,
  SharedNgZorroAntdModule,
  TranslateModule,

  NgFor,
  NgForm,
  NgStyle,
  NgClass,
  NgModel,
];

const IMPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RecaptchaV3Module,
];

@NgModule({
  exports: [EXPORT],
  imports: [IMPORT],
  providers: [
    DatePipe,
    NgForm,
    NgStyle,
    NgClass,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: FIREBASECONFIG.reCaptchaV3,
    },
  ],
})
export class SharedModule {}
