import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component.js'),
    children: [
      //rutas hijas
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component.js'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component.js'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },
  {
    path: 'trending',
    loadComponent: () =>
      import('./gifs/pages/trending-page/trending-page.component.js'),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./gifs/pages/search-page/search-page.component.js'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
