import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MyLibModule } from './my-lib.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [CommonModule, MyLibModule, RouterOutlet],
  encapsulation: ViewEncapsulation.None,
  template: `
    <router-outlet></router-outlet>
    <a routerLink="dashboard">dsadasdsa</a>
  `,
  styleUrls: [
    './my-lib.component.css',
    '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    '../../../../node_modules/material-icons-font/material-icons-font.css',
    './bootstrap.css',
  ],
})
export class MyLibComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
