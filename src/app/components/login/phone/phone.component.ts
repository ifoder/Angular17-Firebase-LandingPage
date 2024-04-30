import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef,
  inject,
} from '@angular/core';
import { AppCheckModule } from '@angular/fire/app-check';
import {
  FormControl,
  FormGroup,
  NgModel,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ReCaptchaV3Provider } from 'firebase/app-check';
import {
  PhoneAuthProvider,
  RecaptchaVerifier,
  multiFactor,
  signInWithCredential,
  updatePhoneNumber,
  signInWithPhoneNumber,
  updateProfile,
} from 'firebase/auth';
import { ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/shared/model/user.interface';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonLoginComponent } from '../button-login/button-login.component';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [SharedModule, AppCheckModule, ButtonLoginComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
})
export class PhoneComponent implements OnInit {
  buttonsLogin = ['google', 'email'];
  applicationVerifier!: any;
  verificationId: any;
  confirmationResult: any;
  newUser: User = {};

  auth = inject(AuthService);
  storage = inject(StorageService);

  isLoading = false;
  hideFirstStep = false;

  validateForm: FormGroup<{
    name: FormControl<string>;
    phoneNumber: FormControl<string>;
    phoneNumberPrefix: FormControl<'+420' | '+380'>;
    verificationId: FormControl<string>;
  }>;

  getOTP() {
    this.applicationVerifier = this.auth.reCaptcha();
    console.log(this.applicationVerifier);
    this.isLoading = true;

    this.newUser = {
      phone:
        this.validateForm.value.phoneNumberPrefix! +
        this.validateForm.value.phoneNumber,
      username: this.validateForm.value.name,
    };

    this.auth
      .signInWithPhone(this.applicationVerifier, this.newUser.phone!)
      .subscribe((response) => {
        this.verificationId = this.storage.get('verificationId');
        this.confirmationResult = response;
        this.isLoading = false;
        this.hideFirstStep = true;
      });
  }

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('[0-9]*'),
        ],
      ],
      phoneNumberPrefix: '+420' as '+420' | '+380',
      verificationId: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.auth.withCredentional(
        this.verificationId,
        this.validateForm.value.verificationId!,
        this.newUser
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
