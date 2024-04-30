import { Injectable, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  translateServis = inject(TranslateService);

  
  language?: 'cs' | 'uk' | 'en';



  initLanguage() {
    this.translateServis.addLangs(['cs', 'uk', 'en']);
    this.translateServis.setDefaultLang('en');

    let language = navigator.language || (navigator as any).userLanguage;
    language = language.split('-').includes('cs') ? 'cs' : 'uk';
    this.translateServis.setDefaultLang(language);

    // change this URL without navigate
    // this.location.go(language);

    this.language = language;
  }

  changeLanguage(language: any) {
    this.translateServis.setDefaultLang(language);
    // this.location.go(language);
    this.language = language;
  }
}
