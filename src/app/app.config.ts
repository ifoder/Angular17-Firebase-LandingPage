import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  RouterModule,
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
import localeEn from '@angular/common/locales/en';
import localeCs from '@angular/common/locales/cs';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { routesChild } from 'projects/my-lib/src/lib/my-lib-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
registerLocaleData(localeUk);
registerLocaleData(localeEn);
registerLocaleData(localeCs);

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
    importProvidersFrom(RouterModule.forChild(routesChild)),
    importProvidersFrom(FormsModule),
    importProvidersFrom(NgbModule),
    importProvidersFrom(MyLibModule),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
