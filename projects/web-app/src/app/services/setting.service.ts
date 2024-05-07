import { Injectable } from '@angular/core';
import { Language } from '../models/language.interface';
import { Settings } from '../models/settings.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SettingsService implements Settings {
  language: string;
  supportedLanguages: Language[];

  constructor(private localStorage: StorageService) {
    const settings = this.localStorage.get('settings');
    const defaults = this.getDefaults();
    this.set({ ...defaults, ...settings }); // any existing settings value will override defaults
  }

  private getDefaults(): Settings {
    return {
      language: 'en',
      supportedLanguages: [
        {
          label: 'English',
          key: 'en',
          isActive: true,
          isRemovable: false,
        },
        {
          label: 'Ukraine',
          key: 'ua',
          isActive: true,
          isRemovable: false,
        },
        {
          label: 'Czech',
          key: 'cs',
          isActive: true,
          isRemovable: false,
        },
      ],
    };
  }

  private set(settings: Settings) {
    this.language = settings.language;
    this.supportedLanguages = settings.supportedLanguages;
  }

  save() {
    this.localStorage.save('settings', {
      language: this.language,
      supportedLanguages: this.supportedLanguages,
    });
  }

  reset() {
    const defaults = this.getDefaults();
    this.set(defaults);
  }

  supportedLanguageExists(label: string, key: string) {
    return (
      this.supportedLanguages.find(
        (lang: Language) =>
          lang.label.toLocaleLowerCase() == label.toLocaleLowerCase()
      ) ||
      this.supportedLanguages.find(
        (lang: Language) =>
          lang.key.toLocaleLowerCase() == key.toLocaleLowerCase()
      )
    );
  }

  getActiveSupportedLanguages() {
    return this.supportedLanguages.filter((lang: Language) => lang.isActive);
  }
}
