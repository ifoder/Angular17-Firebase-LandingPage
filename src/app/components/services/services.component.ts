import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRICE, SERVICES, SERVICESCATEGORY } from '../../shared/data';
import { CategoryServices, Service } from '../../models/service.interface';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { SharedModule } from '../../shared/shared.module';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SharedModule, SharedNgZorroAntdModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  _servicesService = inject(ServicesService);

  visibleServices = computed(() => {
    const services = this._servicesService.servicesSig();
    let categories = this._servicesService.servicesCategorySig();
    categories.map(
      (category) =>
        (category.list = services.filter(
          (service) => category.id === service.categoryId
        ))
    );
    return categories;
  });

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
  submitService(item: any) {}
}
