import { Component } from '@angular/core';
import { CONTACTS, HOME } from '../../../shared/data';
import { AboutComponent } from '../../../components/about/about.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { FeedbackComponent } from '../../../components/feedback/feedback.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesComponent } from '../../../components/services/services.component';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { MAP } from 'src/app/shared/api';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

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
  client = CONTACTS;

  googleNav() {
    window.open(
      'https://maps.google.com/maps?daddr=' + MAP.lat + ',' + MAP.lng
    );
  }
}
