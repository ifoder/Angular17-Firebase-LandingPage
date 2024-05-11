import { Injectable, inject, signal } from '@angular/core';
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
import { CalendarEventsService } from './calendar-events.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  firebaseAuth = inject(Auth);
  auth = inject(AuthService);
  storage = inject(StorageService);
  calendarEvent = inject(CalendarEventsService);
  sms = inject(NotificationService);
  router = inject(Router);

  currentUserSi = signal<User | null | undefined>(undefined);

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    )
      .then((response) => {
        this.storage.saveUser({
          uid: response.user.uid,
          username: response.user.displayName!,
          email: response.user.email!,
        }) as User | undefined;

        this.sms.createNotification(
          'success',
          'Успішно!',
          'Тепер ви можете переглянути ваші бронювання в профілі!'
        );
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 1000);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    return from(promise);
  }

  register(
    username: string,
    email: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    )
      .then((response) => {
        updateProfile(response.user, { displayName: username });
        this.storage.saveUser({
          uid: response.user.uid,
          username: username,
          email: response.user.email!,
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    return from(promise);
  }

  signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    googleProvider.addScope('email');

    signInWithPopup(this.firebaseAuth, googleProvider)
      .then((response) => {
        const user = response.user;
        this.auth.fetchAuth();
        console.log(this.auth.$user());

        /*    this.storage.save('accessToken', {
          uid: user.uid,
          username: user.displayName!,
          email: user.providerData.at(0)?.email!,
          photoURL: user.providerData.at(0)?.photoURL!,
        });*/
        this.sms.createNotification(
          'success',
          'Успішно!',
          'Тепер ви можете переглянути ваші бронювання в профілі!'
        );
        this.calendarEvent.compliteReservace();
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }

  reCaptcha() {
    return new RecaptchaVerifier(this.firebaseAuth, 'sign-in-button', {
      size: 'invisible',
    });
  }

  signInWithPhone(
    applicationVerifier: ApplicationVerifier,
    phoneNumber: string
  ): Observable<void> {
    // const provider = new PhoneAuthProvider(this.firebaseAuth);

    const promise = signInWithPhoneNumber(
      this.firebaseAuth,
      phoneNumber,
      applicationVerifier
    )
      .then((response) => {
        this.storage.save('verificationId', response.verificationId);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });

    return from(promise);
  }
  withCredentional(
    verificationId: any,
    verificationCode: string,
    user: User
  ): Promise<any> {
    const phoneCredential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    console.log(phoneCredential);

    const promise = signInWithCredential(this.firebaseAuth, phoneCredential)
      .then((response) => {
        console.log(response);
        updateProfile(response.user, { displayName: user.username });

        this.storage.saveUser({
          uid: response.user.uid,
          username: user.username,
          phone: user.phone,
        });

        this.sms.createNotification(
          'success',
          'Успішно!',
          'Тепер ви можете переглянути ваші бронювання в профілі!'
        );
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 1000);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });

    return promise;
  }

  PhoneVerified(phone: string, applicationVerifier: any) {
    const provider = new PhoneAuthProvider(this.firebaseAuth);
    return provider
      .verifyPhoneNumber(phone, applicationVerifier)
      .then(() => {})
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }
}
