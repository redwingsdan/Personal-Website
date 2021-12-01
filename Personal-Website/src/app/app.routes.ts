import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

export const AppRoutes: Routes = [
  {
    path: 'app',
    component: HeaderComponent,
    data: { animation: 'MainPage' },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'app/home'
  }
];
