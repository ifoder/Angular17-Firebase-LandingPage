import { Component, OnInit, inject } from '@angular/core';
import { AppCheckModule } from '@angular/fire/app-check';
import {
  FormControl,
  FormGroup,
  NgModel,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/models/user.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonLoginComponent } from '../button-login/button-login.component';
import { Router } from '@angular/router';
import { DatepickerService } from 'src/app/services/datepicker.service';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [SharedModule, ButtonLoginComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
})
export class PhoneComponent implements OnInit {
  _auth = inject(AuthService);
  _storage = inject(StorageService);
  _router = inject(Router);
  _datePicker = inject(DatepickerService);

  isLoading = false;
  hideFirstStep = false;
  buttonsLogin = ['google', 'email'];

  applicationVerifier!: any;
  verificationId: any;
  confirmationResult: any;
  newUser: User = {};

  validateForm: FormGroup<{
    name: FormControl<string>;
    phoneNumber: FormControl<string>;
    phoneNumberPrefix: FormControl<'+420' | '+380'>;
    verificationId: FormControl<string>;
  }>;

  ngOnInit(): void {}

  getOTP() {
    this.applicationVerifier = this._auth.reCaptcha();
    console.log(this.applicationVerifier);
    this.isLoading = true;

    this.newUser = {
      phone:
        this.validateForm.value.phoneNumberPrefix! +
        this.validateForm.value.phoneNumber,
      username: this.validateForm.value.name,
    };

    this._auth
      .signInWithPhone(this.applicationVerifier, this.newUser.phone!)
      .subscribe((response) => {
        this.verificationId = this._storage.get('verificationId');
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

  submitForm(): void {
    if (this.validateForm.valid) {
      const res = this._auth
        .withCredentional(
          this.verificationId,
          this.validateForm.value.verificationId!,
          this.newUser
        )
        .then(() => {
          this._router.navigate(['home']);
        });

      console.log(res);
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
