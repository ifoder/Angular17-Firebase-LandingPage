import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../services/i18n.services';

@Pipe({
  standalone: true,
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  constructor(private i18nService: I18nService) {}

  transform(key: string, substitutions?: { [key: string]: string }): string {
    return this.i18nService.get(key, substitutions);
  }
}
