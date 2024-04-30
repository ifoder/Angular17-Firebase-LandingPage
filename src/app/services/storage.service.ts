import { Injectable } from '@angular/core';
import { User } from '../shared/model/user.interface';

const USER_KEY = 'auth-user ';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
    window;
  }

  public saveUser(user: User | undefined): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public save(key: string, json: any): void {
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, JSON.stringify(json));
  }
  public getUser(): User | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  public get(key: string) {
    const user = window.sessionStorage.getItem(key);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
