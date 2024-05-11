import { Injectable, OnInit, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';

import {
  Auth,
  user,
  GoogleAuthProvider,
  multiFactor,
} from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  linkWithCredential,
  EmailAuthCredential,
  signOut,
  updateProfile,
  signInWithPhoneNumber,
  getAuth,
  updateEmail,
  updatePhoneNumber,
  onAuthStateChanged,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
  ApplicationVerifier,
} from 'firebase/auth';
import { User } from '../models/user.interface';
import { StorageService } from './storage.service';
import { ReCaptchaV3Provider, getToken } from 'firebase/app-check';
import { appCheck } from 'firebase-admin';
import { AppCheck } from '@angular/fire/app-check';
import { adminToken } from '../shared/api';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  auth = getAuth();
  isAuth = signal<boolean>(false);
  $user = signal<User | null | undefined>(undefined);
  router = inject(Router);

  fetchAuth() {
    return onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isAuth.set(true);
        this.$user.set({
          uid: user.uid,
          username: user.displayName!,
          email: user.providerData.at(0)?.email!,
          photoURL: user.providerData.at(0)?.photoURL!,
        });
      } else {
        this.isAuth.set(false);
        this.$user.set(undefined);
      }
    });
  }

  isAdmin(email?: string) {
    if (!email) email = this.$user()?.email;

    return adminToken.includes(email!);
  }
  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    this.fetchAuth();
    // this.sms.createNotification('success', 'Успішно!', 'Ви вийшли з профілю!');
    // setTimeout(() => {
    //   this.router.navigate(['home']);
    // }, 1000);
    return from(promise);
  }
}
