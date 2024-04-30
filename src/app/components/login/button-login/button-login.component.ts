import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'button-login',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule],
  templateUrl: './button-login.component.html',
})
export class ButtonLoginComponent implements OnInit {
  authService = inject(AuthService);

  constructor(
    private storage: StorageService,
    private fb: NonNullableFormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {}

  signInGoogle() {
    this.authService.signInWithGoogle();
  }

  signInPhone() {
    this.router.navigate(['phone']);
  }
}
