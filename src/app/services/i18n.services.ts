import { Injectable, OnInit, computed, signal } from '@angular/core';
import { en } from '../i18n/en';
import { cs } from '../i18n/cs';
import { ua } from '../i18n/ua';
import { SettingsService } from './setting.service';
import { TranslationsService } from './translations.service';
import { Translation, TranslationData } from '../models/translations.model';

@Injectable({ providedIn: 'root' })
export class I18nService implements OnInit {
  private lang: string = 'en';
  trans = computed(() => this.translate.translationsDataSig());
  translations: Translation = {};

  constructor(
    private settings: SettingsService,
    private translate: TranslationsService
  ) {
    // Set language
    if (this.settings.language) {
      console.log(this.settings);

      this.setLanguage(this.settings.language);
    }
  }
  ngOnInit(): void {}
  setLanguage(lang: string): void {
    this.lang = lang;
  }

  getCurrentLanguage(): string {
    return this.lang;
  }

  get(key: string, substitutions?: { [key: string]: string }): string {
    return this.translate.translationsDataSig()[this.lang][key]
      ? this.replace(
          this.translate.translationsDataSig()[this.lang][key],
          substitutions
        )
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
    console.log('translation:', result);
    return result;
  }
}
