import { Injectable } from '@angular/core';
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
import { Contacts } from '../shared/model/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contactsSource = new BehaviorSubject<any | null>(null);
  contacts$ = this.contactsSource.asObservable();

  constructor(private firestore: Firestore) {}

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
