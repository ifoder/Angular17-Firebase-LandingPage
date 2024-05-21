import { Pipe, PipeTransform, Signal, computed, signal } from '@angular/core';
import { I18nService } from '../services/i18n.services';
import { Observable } from 'rxjs';
import { toObservable } from './toObservable';
import { TranslationsService } from 'src/app/services/translations.service';

@Pipe({
  standalone: true,
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private i18nService: I18nService,
    private trans: TranslationsService
  ) {}

  transform(key: string, substitutions?: { [key: string]: string }): string {
    return this.i18nService.get2(key, substitutions);
  }
}
