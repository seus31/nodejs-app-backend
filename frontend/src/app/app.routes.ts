import { Routes } from '@angular/router';
import { GuestComponent } from './theme/layout/guest/guest.component';

export const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./components/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];
