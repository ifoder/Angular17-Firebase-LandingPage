import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, FormRecord, NgForm } from '@angular/forms';
import { Observable, timeout } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { ContactsService } from '../../../services/contacts.service';
import { Contacts } from '../../../models/contacts';

@Component({
  selector: 'app-kadernictvi-admin',
  standalone: true,
  imports: [SharedModule],

  templateUrl: './kadernictvi.component.html',
  styleUrl: './kadernictvi.component.css',
})
export class KadernictviAdminComponent implements OnInit {
  @ViewChild('contactForm') contactForm: NgForm;
  _contactsService = inject(ContactsService);

  contacts$!: Observable<Contacts[]>;
  contact: Contacts;

  constructor() {}

  ngOnInit(): void {
    this.getContacts();
  }

  submitForm() {
    this._contactsService.updateContacts(this.contact);
  }

  getContacts() {
    this.contacts$ = this._contactsService.getContacts();
    this._contactsService.getContacts().forEach((p) =>
      p.find((x) => {
        if ((x.id = 1)) this.contact = x;
      })
    );
  }
}
