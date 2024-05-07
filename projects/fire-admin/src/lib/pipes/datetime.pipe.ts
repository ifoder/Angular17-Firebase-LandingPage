import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../services/i18n.service';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datetime',
})
export class DateTimePipe extends DatePipe implements PipeTransform {
  constructor(private i18nService: I18nService) {
    super(i18nService.getCurrentLanguage());
  }

  override transform(
    value: any,
    format?: string,
    timezone?: string,
    locale?: string
  ): any {
    return super.transform(
      value,
      format || 'dd MMMM yyyy HH:mm',
      timezone,
      locale || this.i18nService.getCurrentLanguage()
    );
  }
}
