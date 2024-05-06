import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryServices, Service } from 'src/app/models/service.interface';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { ServicesService } from 'src/app/services/services.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-category-admin',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryAdminComponent implements OnInit {
  _servicesService = inject(ServicesService);

  editCategory: CategoryServices | null = null;

  startEdit(category: CategoryServices): void {
    this.editCategory = category;
  }

  stopEdit(categories: any): void {
    this.editCategory = null;
    this._servicesService.updateServicesCategory(this.editCategory!);
    categories.forEach((category: CategoryServices) =>
      this._servicesService.updateServicesCategory(category)
    );
  }

  addRow(): void {
    this._servicesService.addServicesCategory({
      title: ``,
    }) as CategoryServices;
  }

  deleteRow(id: string, categories: any): void {
    this._servicesService.deleteServicesCategory(id);
    this.stopEdit(categories);
    this._servicesService.deleteServicesCategory(id);
  }

  ngOnInit(): void {
    this._servicesService
      .getServicesCategory()
      .subscribe((servicesCategory) =>
        this._servicesService.servicesCategorySig.set(servicesCategory)
      );
  }
}
