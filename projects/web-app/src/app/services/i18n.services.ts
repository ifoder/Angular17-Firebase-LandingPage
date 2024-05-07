import { Injectable, OnInit, computed, signal } from '@angular/core';

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
    if (
      Object.keys(this.translate.translationsDataSig()).includes(this.lang) &&
      Object.keys(this.translate.translationsDataSig()[this.lang]).includes(key)
    ) {
      return this.replace(
        this.translate.translationsDataSig()[this.lang][key],
        substitutions
      );
    }
    return key;
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
