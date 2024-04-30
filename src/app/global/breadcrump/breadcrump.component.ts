import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'breadcrump-app',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule, RouterLink],
  templateUrl: './breadcrump.component.html',
})
export class BreadcrumpComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);

  paths = signal<string[]>([]);

  userName: any;

  ngOnInit(): void {
    this.userName =
      this.authService.currentUserSig()?.username === undefined
        ? 'Anonymous'
        : this.authService.currentUserSig()?.username;
    const pats = window.location.pathname.slice(1);
    this.paths.set(pats.split('/'));
    console.log(this.paths());
  }
}
