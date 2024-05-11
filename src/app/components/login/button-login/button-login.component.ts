import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/signin.service';

@Component({
  selector: 'button-login',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule],
  templateUrl: './button-login.component.html',
})
export class ButtonLoginComponent implements OnInit {
  @Input() buttons: string[] = [];

  _signIn = inject(SignInService);
  public router = inject(Router);

  ngOnInit(): void {}

  currentButton(button: string) {
    return this.buttons.includes(button);
  }
  signInGoogle() {
    this._signIn.signInWithGoogle();
  }

  signInPhone() {
    this.router.navigate(['phone']);
  }
  signInEmail() {
    this.router.navigate(['login']);
  }
}
