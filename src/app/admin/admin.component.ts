import { Component, OnInit, inject } from '@angular/core';
import { SharedNgZorroAntdModule } from '../shared/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServicesAdminComponent } from './components/services/services.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { CategoryAdminComponent } from './components/category/category.component';
import {
  NzCollapseModule,
  NzCollapsePanelComponent,
} from 'ng-zorro-antd/collapse';
import { KadernictviAdminComponent } from './components/kadernictvi/kadernictvi.component';
import { DashboardAdminComponent } from './components/dashboard/dashboard.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SharedNgZorroAntdModule,
    CommonModule,
    SharedModule,
    ServicesAdminComponent,
    CategoryAdminComponent,
    KadernictviAdminComponent,
    DashboardAdminComponent,
    RouterModule,
    NzCollapseModule,
    NzCollapsePanelComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}
  hide = true;
  admin = false;
  ngOnInit(): void {
    // this.admin = this.auth.isAdmin();
    // if (!this.admin) window.location.href = '/';
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log(event.url);
    //     if (event.url.substring(0, 6) == '/admin') {
    //       this.hide = false;
    //     }
    //   }
    // });
  }
}
