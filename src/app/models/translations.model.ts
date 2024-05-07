import { Language } from './language.interface';

export interface Translation {
  id?: any;
  [key: string]: string; // key: value
}

export interface TranslationData {
  key: string;
  value: string;
  lang: string;
}
