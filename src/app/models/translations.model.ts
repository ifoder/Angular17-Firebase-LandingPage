export interface TranslateLang {
  [key: string]: string; // key: value
}

export interface Translation {
  [key: string]: { [key: string]: string }; // key: value
}

export interface TranslationData {
  key: string;
  value: string;
  lang: string;
}
