import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './global/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './global/footer/footer.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { LanguageService } from './services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedModule } from './shared/shared.module';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { User } from './shared/model/user.interface';
import { updateEmail, onAuthStateChanged } from 'firebase/auth';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    AboutComponent,
    ReserveComponent,
    ClientsComponent,

    FeedbackComponent,
    GalleryComponent,
    NavComponent,
    ServicesComponent,
    FooterComponent,
    NzLayoutModule,
    SharedModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private languageService = inject(LanguageService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private storage = inject(StorageService);
  showLayoutTopBottom = signal<boolean>(true);

  ngOnInit(): void {
    this.languageService.initLanguage();

    this.authService.user$.subscribe((user) => {
      let currentUser: User = new User();
      if (user) {
        if (!user.email && this.storage.getUser()?.email) {
          onAuthStateChanged(this.authService.firebaseAuth, () => {
            updateEmail(
              this.authService.firebaseAuth.currentUser!,
              this.storage.getUser()?.email!
            );
          });
        }

        currentUser = {
          email: user.email!,
          username: user.displayName!,
          uid: user.uid,
          admin: this.authService.isAdmin(user.uid),
          phone: user.phoneNumber!,
          photoURL: user.photoURL!,
        };
        this.authService.currentUserSig.set(currentUser);
      } else {
        this.authService.currentUserSig.set(null);
        this.storage.clean();
      }
      console.log(this.authService.currentUserSig());
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.substring(0, 6) == '/admin') {
          this.showLayoutTopBottom.set(false);
        }
      }
    });
  }
}
