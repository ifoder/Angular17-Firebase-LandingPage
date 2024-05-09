import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { AuthService } from 'src/app/services/auth.service';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { MyLibModule } from '../../../my-lib.module';
import { RouterLink } from '@angular/router';
import { EscapeUrlPipe } from 'src/app/pipes/escape-url.pipe';
import { AsyncPipe } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fa-navbar',
  standalone: true,
  imports: [
    MyLibModule,
    NgbCollapseModule,
    EscapeUrlPipe,
    AsyncPipe,
    TranslatePipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isSticky: boolean = true;
  @Input() isCentered: boolean = false;
  @Input() showBrand: boolean = false;

  defaultAvatar = 'u';
  currentUser = this.auth.currentUserSig();

  constructor(public navigation: NavigationService, public auth: AuthService) {}

  ngOnInit() {}

  getUserName(): string | undefined {
    return this.auth.currentUserSig()?.username || undefined;
  }

  toggleSidebar(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  getLogo(): string {
    return 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MHB0IiBoZWlnaHQ9IjQwcHQiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIj48ZyBpZD0ic3VyZmFjZTc1NjY3NjYiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsNDguMjM1Mjk0JSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjAgNDAgQyA4Ljk1MzEyNSA0MCAwIDMxLjA0Njg3NSAwIDIwIEMgMCA4Ljk1MzEyNSA4Ljk1MzEyNSAwIDIwIDAgQyAzMS4wNDY4NzUgMCA0MCA4Ljk1MzEyNSA0MCAyMCBDIDQwIDMxLjA0Njg3NSAzMS4wNDY4NzUgNDAgMjAgNDAgWiBNIDIwIDQwICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODQuMzEzNzI1JSw4NC4zMTM3MjUlLDg0LjMxMzcyNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMS4zMzIwMzEgMjcuMDQyOTY5IEwgMTkuNTg1OTM4IDExLjU3MDMxMiBDIDE5Ljc1NzgxMiAxMS4yNDIxODggMjAuMjMwNDY5IDExLjI1IDIwLjM5NDUzMSAxMS41ODIwMzEgTCAyMy4yNSAxNy4yOTI5NjkgWiBNIDExLjMzMjAzMSAyNy4wNDI5NjkgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig5Ni4wNzg0MzElLDk2LjA3ODQzMSUsOTYuMDc4NDMxJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDExLjMzMjAzMSAyNy4wMzkwNjIgTCAxNC4zMzU5MzggOC41MTE3MTkgQyAxNC40MTQwNjIgOC4wMjczNDQgMTUuMDY2NDA2IDcuOTIxODc1IDE1LjI5Mjk2OSA4LjM1OTM3NSBMIDIxLjA4MjAzMSAxOS40NTMxMjUgWiBNIDExLjMzMjAzMSAyNy4wMzkwNjIgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4NC4zMTM3MjUlLDg0LjMxMzcyNSUsODQuMzEzNzI1JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDExLjMzNTkzOCAyNy4wMzUxNTYgTCAxMS40NDUzMTIgMjYuOTQ5MjE5IEwgMjAuOTQxNDA2IDE5LjE3OTY4OCBMIDE4LjI2MTcxOSAxNC4wNDY4NzUgWiBNIDExLjMzNTkzOCAyNy4wMzUxNTYgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig5Ni4wNzg0MzElLDk2LjA3ODQzMSUsOTYuMDc4NDMxJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDExLjMzMjAzMSAyNy4wNDI5NjkgTCAyNS43NzczNDQgMTMuMTEzMjgxIEMgMjYuMDgyMDMxIDEyLjgyMDMxMiAyNi41ODU5MzggMTIuOTkyMTg4IDI2LjY0ODQzOCAxMy40MTAxNTYgTCAyOC42Njc5NjkgMjcuMDQyOTY5IEwgMjAuNTQyOTY5IDMxLjc3NzM0NCBDIDIwLjIxMDkzOCAzMS45NjA5MzggMTkuODA4NTk0IDMxLjk2MDkzOCAxOS40ODA0NjkgMzEuNzc3MzQ0IFogTSAxMS4zMzIwMzEgMjcuMDQyOTY5ICIvPjwvZz48L3N2Zz4=';
  }
}
