import { effect, Signal } from '@angular/core';
import {
  first,
  Observable,
  ObservableInput,
  ReplaySubject,
  takeUntil,
} from 'rxjs';

// I am poor with observables - pls suggest how to construct
// an appropriate observable for `obs$`.
// I'm assuming that since signals is handling many things internally,
// I don't need to user `distinctUntilChanged` or `shareReplay`, etc

export const toObservable = {
  withAbortController: <T>(source: Signal<T>, abort?: AbortController) => {
    const obs$ = new ReplaySubject<T>(1);
    const synchronizer = effect(() => obs$.next(source()));

    if (abort) {
      abort.signal.addEventListener('abort', () => {
        synchronizer.destroy();
        obs$.complete();
      });
    }

    return obs$;
  },

  withCompletionSignal: <T>(source: Signal<T>, abort?: Signal<boolean>) => {
    const obs$ = new ReplaySubject<T>(1);
    const synchronizer = effect(() => obs$.next(source()));

    if (abort) {
      const killer = effect(() => {
        if (abort()) {
          synchronizer.destroy();
          obs$.complete();
          killer.destroy();
        }
      });
    }

    return obs$;
  },

  withCompletionObservable: <T>(source: Signal<T>, abort?: Observable<any>) => {
    const obs$ = new ReplaySubject<T>(1);
    const synchronizer = effect(() => obs$.next(source()));

    if (abort) {
      abort.pipe(first()).subscribe(() => {
        synchronizer.destroy();
        obs$.complete();
      });
    }

    return obs$;
  },

  withCompletionPromise: <T>(source: Signal<T>, abort?: Promise<any>) => {
    const obs$ = new ReplaySubject<T>(1);
    const synchronizer = effect(() => obs$.next(source()));

    if (abort) {
      abort.then(() => {
        synchronizer.destroy();
        obs$.complete();
      });
      // what if the completion promise errors?
    }

    return obs$;
  },
} as const;
