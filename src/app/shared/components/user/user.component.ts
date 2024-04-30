import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedNgZorroAntdModule } from '../../ng-zorro.module';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterLink, CommonModule, SharedNgZorroAntdModule, SharedModule],
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
