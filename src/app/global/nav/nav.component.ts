import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVITEMS } from '../../shared/api';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import {
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../services/language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgFor,
    CommonModule,
    SharedNgZorroAntdModule,
    SharedModule,
    NgStyle,
    TranslateModule,
    NzAvatarModule,
    NzIconModule,
    UserComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  authService = inject(AuthService);
  languageService = inject(LanguageService);

  languageFormControl = 'uk';

  navItems = NAVITEMS;

  ngOnInit(): void {}

  changeLanguage($event: any) {
    this.languageService.changeLanguage($event);
  }
}
