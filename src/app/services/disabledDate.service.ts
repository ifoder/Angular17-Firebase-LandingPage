import { inject, Injectable, signal } from '@angular/core';
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
import { collection, getDocs } from '@firebase/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ICalendarEvent } from '../models/calendarEvents.interface';

@Injectable({
  providedIn: 'root',
})
export class DisabledDateService {
  private firestore = inject(Firestore);

  calendarEventsCollection = collection(this.firestore, 'calendarEvent');

  disabledDateSig = signal<ICalendarEvent[]>([]);

  getCurrentTimeOfDay(): Observable<ICalendarEvent[]> {
    return collectionData(this.calendarEventsCollection, {
      idField: 'id',
    }) as Observable<ICalendarEvent[]>;
  }
  addCalendarEvent(calendarEvent: ICalendarEvent) {
    console.log('ADD');

    const calendarEventsRef = collection(this.firestore, 'calendarEvent');
    return addDoc(calendarEventsRef, calendarEvent);
  }

  async updateCalendarEvent(calendarEvent: ICalendarEvent) {
    const calendarEventsRef = collection(this.firestore, 'calendarEvent/');
    let q = query(calendarEventsRef, where('id', '==', calendarEvent.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'calendarEvent', document.id);
      await updateDoc(docRef, { ...calendarEvent });
    });
  }

  async deleteCalendarEvent(id: string) {
    const calendarEventsRef = collection(this.firestore, 'calendarEvent');
    let q = query(calendarEventsRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'calendarEvent', document.id);
      deleteDoc(docRef);
    });
  }
}
