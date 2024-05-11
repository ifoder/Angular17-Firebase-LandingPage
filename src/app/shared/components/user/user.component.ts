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
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedNgZorroAntdModule } from '../../ng-zorro.module';
import { SharedModule } from '../../shared.module';
import { SignInService } from 'src/app/services/signin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterLink, CommonModule, SharedNgZorroAntdModule, SharedModule],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  _signIn = inject(SignInService);
  _auth = inject(AuthService);
  router = inject(Router);

  $user = computed(() => this._auth.$user());

  ngOnInit(): void {}

  logout(): void {
    this._auth.logout();
  }
}
