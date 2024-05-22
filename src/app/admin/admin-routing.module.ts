import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardAdminComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { BarbersAdminComponent } from './components/barbers/barbers.component';
import { KadernictviAdminComponent } from './components/kadernictvi/kadernictvi.component';
import { ServicesAdminComponent } from './components/services/services.component';
import { CategoryAdminComponent } from './components/category/category.component';
import { CalendarAdminComponent } from './components/calendar/calendar.component';
import { TranslationsComponent } from './components/translations/translationscomponent';

export const routesChild: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,

    children: [
      // Login
      {
        path: 'dashboard',
        component: DashboardAdminComponent,
      },
      {
        path: 'calendar',
        component: CalendarAdminComponent,
      },
      {
        path: 'category',
        component: CategoryAdminComponent,
      },
      {
        path: 'services',
        component: ServicesAdminComponent,
      },
      {
        path: 'kadernictvi',
        component: KadernictviAdminComponent,
      },
      {
        path: 'barbers',
        component: BarbersAdminComponent,
      },
      {
        path: 'translations',
        component: TranslationsComponent,
      },
      {
        path: 'translations/:tab',
        component: TranslationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesChild)],
  exports: [RouterModule],
  declarations: [],
})
export class AdminRoutingModule {}
