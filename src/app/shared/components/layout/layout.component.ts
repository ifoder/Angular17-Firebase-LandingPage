import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SharedNgZorroAntdModule } from '../../ng-zorro.module';
import { NavComponent } from '../nav/nav.component';

import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { UserComponent } from '../user/user.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-layout',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    SharedNgZorroAntdModule,
    NavComponent,
    FooterComponent,
    UserComponent,
    NzLayoutModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  @Input() adminPanel = false;
  @Input() navItems: any;
}
