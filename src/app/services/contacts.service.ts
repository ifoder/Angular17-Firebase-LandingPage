import { Injectable, inject, signal } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { collection, getDocs, collectionGroup } from '@firebase/firestore';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
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

  async updateContacts(contacts: Contacts) {
    let q = query(this.contactsCollection, where('id', '==', 1));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.contactsCollection, document.id);
      const promise = setDoc(docRef, contacts);
    });
  }
}
