import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { GoogleMapsModule } from '@angular/google-maps';

import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { getAnalytics } from 'firebase/analytics';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { provideAnalytics } from '@angular/fire/analytics';
import { FIREBASECONFIG } from './shared/api';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { registerLocaleData } from '@angular/common';

import localeUk from '@angular/common/locales/uk';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

registerLocaleData(localeUk);

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'i18n', '.ts');
}

const I18N_CONFIG = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withEnabledBlockingInitialNavigation()
    ),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(FIREBASECONFIG)),
      provideAuth(() => getAuth()),

      provideFirestore(() => getFirestore()),
      provideFunctions(() => getFunctions()),
      provideMessaging(() => getMessaging()),
      providePerformance(() => getPerformance()),
      provideStorage(() => getStorage()),
      provideAnalytics(() => getAnalytics()),
    ]),
    AngularFireDatabaseModule,

    importProvidersFrom(GoogleMapsModule),

    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),

    importProvidersFrom(TranslateModule.forRoot()),
  ],
};
