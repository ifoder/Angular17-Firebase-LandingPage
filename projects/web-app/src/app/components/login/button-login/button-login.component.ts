import { Component, Input, OnInit, inject, signal } from '@angular/core';

import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'button-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './button-login.component.html',
})
export class ButtonLoginComponent implements OnInit {
  @Input() buttons: string[] = [];

  authService = inject(AuthService);
  public router = inject(Router);

  ngOnInit(): void {}

  currentButton(button: string) {
    return this.buttons.includes(button);
  }
  signInGoogle() {
    this.authService.signInWithGoogle();
  }

  signInPhone() {
    this.router.navigate(['phone']);
  }
  signInEmail() {
    this.router.navigate(['login']);
  }
}
