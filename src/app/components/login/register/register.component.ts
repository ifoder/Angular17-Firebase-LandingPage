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
import { ButtonLoginComponent } from '../button-login/button-login.component';
import { Router } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { SignInService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule, ButtonLoginComponent, LayoutComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  signService = inject(SignInService);
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
      this.signService.register(
        this.validateForm.value.firstName!,
        this.validateForm.value.email!,
        this.validateForm.value.password!
      );
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
