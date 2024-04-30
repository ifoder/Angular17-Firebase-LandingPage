import { DatePipe } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import {
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DatepickerService } from '../services/datepicker.service';
import { AngularFireModule } from '@angular/fire/compat';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { FIREBASECONFIG } from './api';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule],
  imports: [FormsModule, ReactiveFormsModule, RecaptchaV3Module],
  providers: [
    DatePipe,
    NgForm,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: FIREBASECONFIG.reCaptchaV3,
    },
  ],
})
export class SharedModule {}
