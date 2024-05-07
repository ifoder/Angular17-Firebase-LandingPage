import { Component, OnInit, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SharedModule } from '../../shared.module';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterLink, SharedModule],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  currentUser$ = computed(() => this.authService.currentUserSig());

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
  }
}
