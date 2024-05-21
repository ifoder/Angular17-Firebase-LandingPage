import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRICE, SERVICES, SERVICESCATEGORY } from '../../../shared/data';
import { CategoryServices, Service } from '../../../models/service.interface';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';
import { SharedModule } from '../../../shared/shared.module';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationsService } from 'src/app/services/translations.service';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-translations',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule, NzInputModule],
  templateUrl: './translations.component.html',
  styleUrl: './translations.component.css',
})
export class TranslationsComponent {
  _translationsService = inject(TranslationsService);
  translations = this._translationsService.$translationsData;

  editService: Service | null = null;
  editServices: Service[] = [];

  startEdit(service: Service): void {
    if (this.editService !== null && this.editService.id !== service.id)
      this.editServices.push(this.editService);

    console.log(this.editServices);

    this.editService = service;
  }

  stopEdit(services: any): void {
    this.editServices.push(this.editService!);
    this.editServices.forEach((service: any) =>
      this._translationsService.updateTranslations(service)
    );

    this.editServices = [];
    this.editService = null;
  }

  getCategoryTitle(id: string) {
    let a = this._translationsService
      .$translations()
      .find((a: any) => a.id == id);
    return a?.title;
  }

  addRow(): void {
    this._translationsService.addTranslations({
      key: 'null',
      lang: 'en',
      value: '',
    }) as Service;
  }

  deleteRow(id: string, services: any): void {
    // this.stopEdit(services);
    // this._translationsService.deleteServices(id);
  }

  ngOnInit(): void {
    console.log(this._translationsService.$translations());
  }
}
