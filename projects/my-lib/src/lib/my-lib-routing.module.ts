import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routesChild: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MyLibComponent,

    children: [
      // Login
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesChild)],
  exports: [RouterModule],
  declarations: [],
})
export class FireAdminRoutingModule {}
