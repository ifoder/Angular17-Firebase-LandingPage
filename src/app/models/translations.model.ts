import { Language } from './language.interface';

export interface Translation {
  [key: string]: { [key: string]: string }; // key: value
}

export interface TranslationData {
  key: string;
  value: string;
  lang: string;
}
