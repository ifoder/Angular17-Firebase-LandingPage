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
import { Barber } from '../models/barbers.interface';

@Injectable({
  providedIn: 'root',
})
export class BarbersService {
  private barbersSource = new BehaviorSubject<any | null>(null);
  barbers$ = this.barbersSource.asObservable();

  constructor(private firestore: Firestore) {}

  addBarbers(barbers: Barber) {
    const barbersRef = collection(this.firestore, 'barbers');
    return addDoc(barbersRef, barbers);
  }

  getBarbers(filter = '') {
    const barbersRef = collection(this.firestore, 'barbers');

    let q = query(barbersRef);

    if (filter) {
      q = query(barbersRef, where('categoryId', '==', filter));
    }

    return collectionData(q) as unknown as Observable<Barber[]>;
  }

  async updateBarbers(barbers: Barber) {
    const barbersRef = collection(this.firestore, 'barbers');
    let q = query(barbersRef, where('id', '==', barbers.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'barbers', document.id);
      await updateDoc(docRef, { ...barbers });
    });
  }

  async deleteBarbers(id: string) {
    const barbersRef = collection(this.firestore, 'barbers');
    let q = query(barbersRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'barbers', document.id);
      deleteDoc(docRef);
    });
  }
}
