import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgClass,
  NgFor,
  NgIf,
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
import { SharedNgZorroAntdModule } from './ng-zorro.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const EXPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  SharedNgZorroAntdModule,
  // TranslateModule,
  NgIf,
  NgFor,
  NgForm,
  NgStyle,
  NgClass,
  NgModel,
];

const IMPORT = [
  SharedNgZorroAntdModule,

  AsyncPipe,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  exports: [EXPORT],
  imports: [IMPORT],
  providers: [DatePipe, NgForm, NgStyle, NgClass, AsyncPipe],
})
export class SharedModule {}
