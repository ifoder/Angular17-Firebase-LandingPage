import { computed, inject, Injectable, signal } from '@angular/core';
import {
  addDoc,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { collection, getDocs } from '@firebase/firestore';
import { BehaviorSubject, from, map, Observable, of } from 'rxjs';
import { ICalendarEvent } from '../models/calendarEvents.interface';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventsService {
  private firestore = inject(Firestore);
  private auth = inject(AuthService);
  router = inject(Router);
  sms = inject(NotificationService);

  calendarEventsCollection = collection(
    this.firestore,
    'calendarEvent'
  ) as CollectionReference<ICalendarEvent>;

  $calendarEvents = signal<ICalendarEvent[]>([]);
  $totalCalendarEvents = computed(() => this.$calendarEvents().length);

  $currentReserve = signal<ICalendarEvent | undefined>(undefined);

  fetchData() {
    return collectionData(this.calendarEventsCollection, {
      idField: 'id',
    }).subscribe((e) => {
      this.$calendarEvents.set(e);
    });
  }

  getCalendarEventsOfDate(date: Date) {
    return this.$calendarEvents().filter(
      (f) =>
        new Date(date).getDate() == new Date(f.date).getDate() &&
        new Date(date).getMonth() == new Date(f.date).getMonth()
    );
  }

  async addCalendarEvent(calendarEvent: ICalendarEvent): Promise<void> {
    const event = calendarEvent;
    event.date = calendarEvent.date.toString();
    return await addDoc(this.calendarEventsCollection, calendarEvent)
      .then((response) => console.log(response + 'sdadsadsadsa'))
      .catch((error) => console.log(error.code, error.message));
  }

  async updateCalendarEvents(services: ICalendarEvent) {
    const docRef = doc(this.firestore, 'calendarEvent/' + services.id);
    const promise = setDoc(docRef, services);
    return from(promise);
  }

  deleteCalendarEvents(id: string): Observable<void> {
    const docRef = doc(this.firestore, 'calendarEvent/' + id);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  // async updateCalendarEvent(calendarEvent: ICalendarEvent) {
  //   const calendarEventsRef = collection(this.firestore, 'calendarEvent');
  //   let q = query(calendarEventsRef, where('id', '==', calendarEvent.id));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach(async (document) => {
  //     const docRef = doc(this.firestore, 'calendarEvent', document.id);
  //     await updateDoc(docRef, { ...calendarEvent });
  //   });
  // }

  // async deleteCalendarEvent(id: string) {
  //   const calendarEventsRef = collection(this.firestore, 'calendarEvent');
  //   let q = query(calendarEventsRef, where('id', '==', id));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach(async (document) => {
  //     const docRef = doc(this.firestore, 'calendarEvent', document.id);
  //     deleteDoc(docRef);
  //   });
  // }
  // ifStorageReservace() {
  //   console.log('RESERVACE');

  //   if (this.storage.get('calendarEvent') && this.authCalendarEvent.isAuth()) {
  //     this.datePicker.addCalendarEvent({
  //       ...this.storage.get('calendarEvent'),
  //       user: this.storage.getUser(),
  //     } as ICalendarEvent);
  //     this.storage.remove('calendarEvent');
  //     this.sms.createNotification(
  //       'success',
  //       'Послуга зарезервована!',
  //       'Ви можете переглянути ваші бронювання в профілі!'
  //     );
  //     setTimeout(() => {
  //       this.router.navigate(['home']);
  //     }, 1000);
  //     this.router.navigate(['home']);
  //   }
  // }

  compliteReservace() {
    if (!this.auth.isAuth()) {
      this.router.navigate(['/phone']);
    }
    if (!this.$currentReserve()) return;

    this.addCalendarEvent({
      ...this.$currentReserve()!,
      user: this.auth.$user(),
    }).then(() => {
      this.fetchData(), console.log(this.$calendarEvents);
    });
    1;
    this.sms.createNotification(
      'success',
      'Послуга зарезервована!',
      'Ви можете переглянути ваші бронювання в профілі!'
    );
  }
}
