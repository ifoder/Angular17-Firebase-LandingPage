import { Component } from '@angular/core';
import { CONTACTS, HOME } from '../../shared/data';
import { AboutComponent } from '../about/about.component';
import { ClientsComponent } from '../clients/clients.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { MAP } from 'src/app/shared/api';

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
