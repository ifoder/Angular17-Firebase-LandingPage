import {
  Injectable,
  OnInit,
  Signal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { en } from '../i18n/en';
import { cs } from '../i18n/cs';
import { ua } from '../i18n/ua';
import { SettingsService } from './setting.service';
import {
  TranslateLang,
  Translation,
  TranslationData,
} from '../models/translations.model';
import { toObservable } from '../pipes/toObservable';
import { TranslationsService } from './translations.service';

@Injectable({ providedIn: 'root' })
export class I18nService implements OnInit {
  private lang: string = 'en';

  langSig = signal('en');
  translateWithLanguageSig = computed(() => {
    return this.translate.$translations()[this.langSig()] as TranslateLang;
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
  }

  getCurrentLanguage(): string {
    return this.langSig();
  }
  get(key: string, substitutions?: { [key: string]: string }): string {
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
