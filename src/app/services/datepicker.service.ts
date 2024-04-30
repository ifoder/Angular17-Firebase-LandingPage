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
import { collection, getDocs } from '@firebase/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CalendarEvent } from '../shared/model/calendarEvents';

@Injectable({
  providedIn: 'root',
})
export class DatepickerService {
  private calendarEventSource = new BehaviorSubject<any | null>(null);
  calendarEvents$ = this.calendarEventSource.asObservable();

  constructor(private firestore: Firestore) {}

  addCalendarEvent(calendarEvent: CalendarEvent) {
    const calendarEventsRef = collection(this.firestore, 'calendarEvent');
    return addDoc(calendarEventsRef, calendarEvent);
  }

  getCalendarEvents(filter = '') {
    const calendarEventsRef = collection(this.firestore, 'calendarEvent');
    let q = query(calendarEventsRef);
    if (filter) {
      q = query(calendarEventsRef, where('date', '==', filter));
    }
    return collectionData(q) as unknown as Observable<CalendarEvent[]>;
  }

  async updateCalendarEvent(calendarEvent: CalendarEvent) {
    const calendarEventsRef = collection(this.firestore, 'calendarEvent');
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
