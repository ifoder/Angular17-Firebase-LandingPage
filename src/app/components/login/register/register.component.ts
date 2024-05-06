import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { DatepickerService } from 'src/app/services/datepicker.service';
import { ButtonLoginComponent } from '../button-login/button-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule, ButtonLoginComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  authService = inject(AuthService);
  validateForm: FormGroup<{
    firstName: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    // phoneNumber: new FormControl<string>('', Validators.required),
  }>;
  buttonsLogin = ['email', 'google', 'phone'];
  constructor(
    private _storage: StorageService,
    private _datePicker: DatepickerService,
    private fb: NonNullableFormBuilder,
    public router: Router
  ) {
    this.validateForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // phoneNumber: new FormControl<string>('', Validators.required),
    });
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
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
