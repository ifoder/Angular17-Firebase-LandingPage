import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { SharedModule } from '../../shared/shared.module';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { DatepickerService } from '../../services/datepicker.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, ButtonLoginComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);
  buttonsLogin = ['google', 'phone'];

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
    // phoneNumber: new FormControl<string>('', Validators.required),
  }>;

  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private _storage: StorageService,
    private _datePicker: DatepickerService,
    private fb: NonNullableFormBuilder,
    public router: Router
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
      // phoneNumber: new FormControl<string>('', Validators.required),
    });
  }

  ngOnInit(): void {}

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

  signInGoogle() {
    this.authService.signInWithGoogle();
  }

  signInPhone() {
    this.router.navigate(['phone']);
  }
}
