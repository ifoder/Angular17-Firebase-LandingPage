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
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryService {
  private _firestore = inject(Firestore);
  private _auth = inject(Auth);

  private collectionPath: string;
}
