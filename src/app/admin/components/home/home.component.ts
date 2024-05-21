import { Component, inject } from '@angular/core';
import { CONTACTS, HOME } from '../../../shared/data';
import { AboutComponent } from '../../../components/about/about.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { FeedbackComponent } from '../../../components/feedback/feedback.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesComponent } from '../../../components/services/services.component';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { MAP } from 'src/app/shared/api';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { I18nService } from 'src/app/services/i18n.services';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ClientsComponent,
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    FeedbackComponent,
    ServicesComponent,
    SharedNgZorroAntdModule,
    LayoutComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  header = HOME;
  _contactsService = inject(ContactsService);
  client = this._contactsService.$contacts;
  i18n = inject(I18nService);

  googleNav() {
    window.open(
      'https://maps.google.com/maps?daddr=' + MAP.lat + ',' + MAP.lng
    );
  }
}
