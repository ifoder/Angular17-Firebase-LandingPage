import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [CommonModule, SharedModule, SharedNgZorroAntdModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  @Output() eventForm = new EventEmitter<any>();

  validateForm = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    // phoneNumber: new FormControl<string>('', Validators.required),
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.eventForm.emit({ ...this.validateForm.getRawValue() });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
