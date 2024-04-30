import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Observable } from 'rxjs';
import {
  CategoryServices,
  Service,
} from 'src/app/shared/model/service.interface';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { ServicesService } from 'src/app/services/services.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogError } from 'concurrently';

@Component({
  selector: 'app-services-admin',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule, NzInputModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesAdminComponent implements OnInit {
  _servicesService = inject(ServicesService);

  editService: Service | null = null;

  startEdit(service: Service): void {
    this.editService = service;
  }

  stopEdit(services: any): void {
    services.forEach((service: Service) =>
      this._servicesService.updateServices(service)
    );
    this.editService = null;
  }

  getCategoryTitle(id: string) {
    let a = this._servicesService.servicesCategorySig().find((a) => a.id == id);
    return a?.title;
  }

  addRow(): void {
    this._servicesService.addServices({
      title: ``,
      categoryId: this._servicesService.servicesCategorySig().at(0)?.id,
      price: 0,
      description: '',
    }) as Service;
  }

  deleteRow(id: string, services: any): void {
    this.stopEdit(services);
    this._servicesService.deleteServices(id);
  }

  ngOnInit(): void {
    this._servicesService
      .getServices()
      .subscribe((services) => this._servicesService.servicesSig.set(services));
    this._servicesService
      .getServicesCategory()
      .subscribe((servicesCategory) =>
        this._servicesService.servicesCategorySig.set(servicesCategory)
      );
  }
}
