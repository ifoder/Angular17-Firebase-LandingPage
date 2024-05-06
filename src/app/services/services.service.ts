import { inject, Injectable, signal } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  setDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { collection, getDocs, collectionGroup } from '@firebase/firestore';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Service, CategoryServices } from '../models/service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private firestore = inject(Firestore);
  servicesCollection = collection(this.firestore, 'services');
  servicesCategoryCollection = collection(this.firestore, 'servicesCategory');

  servicesSig = signal<Service[]>([]);
  servicesCategorySig = signal<CategoryServices[]>([]);

  getServices(filter = ''): Observable<Service[]> {
    return collectionData(this.servicesCollection, {
      idField: 'id',
    }) as Observable<Service[]>;
  }

  getServicesCategory(filter = ''): Observable<CategoryServices[]> {
    return collectionData(this.servicesCategoryCollection, {
      idField: 'id',
    }) as Observable<CategoryServices[]>;
  }

  addServices(services: Service): Observable<Service> {
    const promise = addDoc(this.servicesCollection, services);
    return from(promise);
  }
  addServicesCategory(servicesCat: CategoryServices) {
    const docRef = collection(this.firestore, 'servicesCategory');
    return addDoc(docRef, servicesCat);
  }

  async updateServices(services: Service) {
    const docRef = doc(this.firestore, 'services/' + services.id);
    const promise = setDoc(docRef, services);
    return from(promise);
  }

  async updateServicesCategory(category: CategoryServices) {
    const docRef = doc(this.firestore, 'servicesCategory/' + category.id);
    const promise = setDoc(docRef, category);
    return from(promise);
  }

  deleteServices(id: string): Observable<void> {
    const docRef = doc(this.firestore, 'services/' + id);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  async deleteServicesCategory(id: string) {
    const docRef = doc(this.firestore, 'servicesCategory/' + id);
    const promise = deleteDoc(docRef);
    return from(promise);
  }
}
