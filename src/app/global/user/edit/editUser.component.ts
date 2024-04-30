import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'edit-user-app',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    CommonModule,
    SharedNgZorroAntdModule,
    SharedModule,
    NgStyle,
  ],
  templateUrl: './editUser.component.html',
  styleUrl: './editUser.component.css',
})
export class EditUserComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);
  currentUser$ = computed(() => this.authService.currentUserSig());

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
    // phoneNumber: new FormControl<string>('', Validators.required),
  }>;

  constructor(
    private storage: StorageService,
    private fb: NonNullableFormBuilder
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
      // phoneNumber: new FormControl<string>('', Validators.required),
    });
  }

  ngOnInit(): void {
    // console.log(this.authService.currentUserSig());
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
