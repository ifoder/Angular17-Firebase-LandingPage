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
import { LayoutComponent } from '../shared/components/layout/layout.component';

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
    LayoutComponent,
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

  navLink = [
    {
      title: 'Бронювання',
      list: [
        { title: 'Панель', link: 'dashboard' },
        { title: 'Календар', link: 'calendar' },
      ],
    },
    {
      title: 'Редагування сторінок сайту',
      list: [
        {
          title: "'Про Нас'",
          link: 'translations',
          params: { tab: 'one' },
        },
        {
          title: "'Контакти'",
          link: 'translations',
          params: { tab: 'two' },
        },
        {
          title: "'Послуги'",
          link: 'translations',
          params: { tab: 'three' },
        },
      ],
    },
    {
      title: 'Настройки',
      list: [
        { title: 'Категорії послуг', link: 'category' },
        { title: 'Послуги', link: 'services' },
        { title: 'Контакти', link: 'kadernictvi' },
        { title: 'Барбери', link: 'barbers' },
      ],
    },
    {
      title: 'Інше',
      list: [{ title: 'На головну', link: '/' }],
    },
  ];
  ngOnInit(): void {}
}
