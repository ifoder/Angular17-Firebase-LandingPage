import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { MAP } from '../../shared/api';
import { CONTACTS } from '../../shared/data';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { I18nService } from 'src/app/services/i18n.services';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    SharedNgZorroAntdModule,
    LayoutComponent,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  i18n = inject(I18nService);
  contactsService = inject(ContactsService);
  marker = {
    position: { lat: MAP.lat, lng: MAP.lng },
  };

  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    disableDefaultUI: true,

    center: { lat: MAP.lat, lng: MAP.lng },
    zoom: 14,
  };

  client = this.contactsService.$contacts;

  ngOnInit(): void {}

  googleNav() {
    window.open(
      'https://maps.google.com/maps?daddr=' + MAP.lat + ',' + MAP.lng
    );
  }
}
