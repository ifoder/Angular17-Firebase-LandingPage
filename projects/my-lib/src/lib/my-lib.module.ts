import { Component, NgModule } from '@angular/core';
import { FireAdminRoutingModule } from './my-lib-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MyLibComponent } from './my-lib.component';
import { RouterLink } from '@angular/router';
import { NavigationService } from './services/navigation.service';
import { AlertService } from './services/alert.service';
import { EscapeUrlPipe } from 'src/app/pipes/escape-url.pipe';

@NgModule({
  declarations: [],
  providers: [NavigationService, AlertService],
  imports: [
    MyLibComponent,
    FireAdminRoutingModule,
    TranslatePipe,
    CommonModule,
    NgClass,
    NgFor,
    RouterLink,
  ],
  exports: [
    MyLibComponent,
    CommonModule,
    NgClass,
    NgFor,
    RouterLink,
    TranslatePipe,
  ],
})
export class MyLibModule {}
