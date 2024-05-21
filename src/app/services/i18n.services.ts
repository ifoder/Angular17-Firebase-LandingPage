import { Injectable, OnInit, computed, signal } from '@angular/core';

import { SettingsService } from './setting.service';

import { TranslationsService } from './translations.service';

@Injectable({ providedIn: 'root' })
export class I18nService implements OnInit {
  private lang: string = 'en';

  langSig = signal('en');
  translateWithLanguageSig = computed(() => {
    if (this.translate.$translations())
      return this.translate.$translations()[this.langSig()]
        ? this.translate.$translations()[this.langSig()]
        : null;
  });

  constructor(
    private settings: SettingsService,
    private translate: TranslationsService
  ) {
    // Set language
    if (this.settings.language) {
      this.setLanguage(this.settings.language);
    }
  }
  ngOnInit(): void {
    console.log(this.translate.$translations());
  }
  setLanguage(lang: string): void {
    this.langSig.set(lang);
    this.settings.language = lang;
    this.settings.save();
  }

  getCurrentLanguage(): string {
    return this.langSig();
  }
  get(key: any) {
    if (key) {
      if (this.translateWithLanguageSig())
        if (this.translateWithLanguageSig()[key])
          return this.translateWithLanguageSig()[key];

      return key;
    }
  }

  get2(key: string, substitutions?: { [key: string]: string }): string {
    const langObj = this.translate.$translations();

    return Object.keys(langObj).includes(this.lang) &&
      Object.keys(langObj[this.lang]).includes(key)
      ? this.translateWithLanguageSig()[key]
      : key;
  }

  private replace(
    translation: string,
    substitutions?: { [key: string]: string }
  ): string {
    let result = translation;
    if (substitutions) {
      Object.keys(substitutions).forEach((key: string) => {
        result = result.replace(
          new RegExp(`\\$\\{${key}\\}`, 'gi'),
          substitutions[key]
        );
      });
    }
    return result;
  }
}
