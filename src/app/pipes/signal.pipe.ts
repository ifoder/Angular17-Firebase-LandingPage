import { OnDestroy, Pipe, PipeTransform, Signal } from '@angular/core';
import { toObservable } from './toObservable';

@Pipe({
  name: 'signal',
  standalone: true,
  pure: true,
})
export class SignalPipe implements PipeTransform, OnDestroy {
  readonly destroy = new AbortController();

  transform<T>(input: Signal<T>) {
    return toObservable.withAbortController(input, this.destroy);
  }

  ngOnDestroy() {
    this.destroy.abort();
  }
}
