import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Observable } from 'rxjs';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { Router } from '@angular/router';
import { ButtonLoginComponent } from './button-login/button-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    SharedNgZorroAntdModule,
    ButtonLoginComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);
  form: any = {
    email: null,
    password: null,
  };

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
    // phoneNumber: new FormControl<string>('', Validators.required),
  }>;

  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private storage: StorageService,
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
  //   // 'recaptcha-container' is the ID of an element in the DOM.
  // const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
  // const provider = new PhoneAuthProvider(auth);
  // const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
  // // Obtain the verificationCode from the user.
  // const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
  // await updatePhoneNumber(user, phoneCredential);

  // onSubmit(): void {
  //   const { email, password } = this.form;

  //   this.authService.login(email, password).subscribe({
  //     next: (data) => {},
  //     error: (err: any) => {
  //       this.errorMessage =
  //         err.code === 'auth/invalid-email'
  //           ? 'Invalid E-MAIL'
  //           : ' Invalid Pass';

  //       this.isLoginFailed = true;
  //     },
  //   });
  // }
}
