import { Injectable, inject, signal } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { collection, getDocs, collectionGroup } from '@firebase/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Contacts } from '../models/contacts';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private firestore = inject(Firestore);
  private auth = inject(AuthService);
  contactsCollection = collection(this.firestore, 'contacts');

  $contacts = signal<any>([]);

  fetchData() {
    return collectionData(this.contactsCollection).subscribe((e) => {
      this.$contacts.set(e.find((i) => i.id == 1));
    });
  }

  addContacts(contacts: Contacts) {
    const contactsRef = collection(this.firestore, 'contacts');
    return addDoc(contactsRef, contacts);
  }

  getContacts(filter = '') {
    const contactsRef = collection(this.firestore, 'contacts');

    let q = query(contactsRef, where('id', '==', 1));

    return collectionData(q) as unknown as Observable<Contacts[]>;
  }

  async updateContacts(contacts: Contacts) {
    console.log(contacts);

    const contactsRef = collection(this.firestore, 'contacts');
    let q = query(contactsRef, where('id', '==', 1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'contacts', document.id);
      await updateDoc(docRef, { ...contacts });
    });
  }

  async deleteContacts(id: string) {
    const contactsRef = collection(this.firestore, 'contacts');
    let q = query(contactsRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'contacts', document.id);
      deleteDoc(docRef);
    });
  }
}
