import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ServicesAdminComponent } from './admin/components/services/services.component';
import { CategoryAdminComponent } from './admin/components/category/category.component';
import { KadernictviAdminComponent } from './admin/components/kadernictvi/kadernictvi.component';
import { BarbersAdminComponent } from './admin/components/barbers/barbers.component';
import { DashboardAdminComponent } from './admin/components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditUserComponent } from './global/user/edit/editUser.component';
import { PhoneComponent } from './components/login/phone/phone.component';

export const routes: Routes = [
  // { path: ':language?', component: HomeComponent },
  { title: 'Home', path: 'home', component: HomeComponent },
  { title: 'About', path: 'about', component: AboutComponent },
  { title: 'Client', path: 'clients', component: ClientsComponent },
  { title: 'Reserve', path: 'reserve', component: ReserveComponent },
  { title: 'Reserve', path: 'reserve/:service', component: ReserveComponent },
  {
    title: 'Feedback',
    path: 'feedback',
    component: FeedbackComponent,
  },
  { title: 'Gallery', path: 'gallery', component: GalleryComponent },
  {
    title: 'Login',
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
    data: {
      role: 'notLoggined',
    },
  },
  { title: 'Register', path: 'register', component: RegisterComponent },
  { title: 'Phone', path: 'phone', component: PhoneComponent },

  { title: 'Services', path: 'services', component: ServicesComponent },
  {
    title: 'Profile',
    path: 'user',
    component: EditUserComponent,
    canActivate: [AuthGuardService],
  },

  {
    title: 'Admin',
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    data: {
      role: 'admin',
    },

    children: [
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
        path: 'dashboard',
        component: DashboardAdminComponent,
      },
    ],
  },
  { title: 'Home', path: '**', component: HomeComponent },
];