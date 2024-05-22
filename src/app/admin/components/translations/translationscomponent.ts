import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
import { PRICE, SERVICES, SERVICESCATEGORY } from '../../../shared/data';
import { CategoryServices, Service } from '../../../models/service.interface';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';
import { SharedModule } from '../../../shared/shared.module';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationsService } from 'src/app/services/translations.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ClientsComponent } from 'src/app/components/clients/clients.component';
import { ContactsService } from 'src/app/services/contacts.service';
import { ServicesComponent } from 'src/app/components/services/services.component';

@Component({
  selector: 'app-translations',
  standalone: true,
  imports: [
    CommonModule,
    SharedNgZorroAntdModule,
    SharedModule,
    RouterLink,
    NzInputModule,
    AboutComponent,
    ClientsComponent,
    ServicesComponent,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './translations.component.html',
  styleUrl: './translations.component.css',
})
export class TranslationsComponent {
  _translationsService = inject(TranslationsService);
  _contactsService = inject(ContactsService);
  _servicesService = inject(ServicesService);
  private route = inject(ActivatedRoute);
  translations = this._translationsService.$translationsData;
  $translations = this._translationsService.$translations;
  $servicesCategory = this._servicesService.servicesCategorySig;
  lang = ['en', 'ua', 'cs'];
  editCategory: any;
  currentTab = 0;
  paramRoute: 'one' | 'two' | 'three' | 'four' = 'one';
  paramRoutes: any;
  hideComponent = false;
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [{ active: false, name: 'This is panel header 1-1' }],
    },
    { active: false, name: 'This is panel header 2' },
    { active: false, name: 'This is panel header 3' },
  ];

  onInputChanged($event: string, key: string, lang: string) {
    let tr = this.translations().find(
      (res: any) => res.key == key && res.lang == lang
    );
    tr.value = $event;
    this._translationsService.updateTranslations(tr);
  }

  onInputChangedContacts($event: string, location: string) {
    let tr = this._contactsService.$contacts();
    tr[location] = $event;
    this._contactsService.updateContacts(tr);
  }

  onInputChangedServiceCategory($event: string, category: any) {
    let tr = this.$servicesCategory().find((m) => m.id == category.id);
    tr!.title = $event;
    this.editCategory = tr;
  }
  saveChangeCategory() {
    this._servicesService.updateServicesCategory(this.editCategory);
    this.editCategory = null;
  }
  ngOnInit(): void {
    this.getRouteParam();
  }
  clickEdit($event: any) {
    console.log($event);
  }
  getRouteParam() {
    this.paramRoutes = this.route.queryParamMap.subscribe((par) => {
      const tab = par.get('tab');

      tab == 'one'
        ? (this.currentTab = 0)
        : tab == 'two'
        ? (this.currentTab = 1)
        : tab == 'three'
        ? (this.currentTab = 2)
        : null;

      return tab;
    });
  }
}
