import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, FormRecord, NgForm } from '@angular/forms';
import { Observable, timeout } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';
import { Contacts } from 'src/app/models/contacts';
import { ContactsService } from 'src/app/services/contacts.service';
import { I18nService } from 'src/app/services/i18n.services';

@Component({
  selector: 'app-kadernictvi-admin',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule],

  templateUrl: './kadernictvi.component.html',
  styleUrl: './kadernictvi.component.css',
})
export class KadernictviAdminComponent implements OnInit {
  @ViewChild('contactForm') contactForm: NgForm;
  _contactsService = inject(ContactsService);
  i18n = inject(I18nService);

  contact = this._contactsService.$contacts;

  ngOnInit(): void {}

  submitForm() {
    this._contactsService.updateContacts(this.contact());
  }
}
