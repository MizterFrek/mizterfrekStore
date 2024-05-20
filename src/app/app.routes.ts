import { Routes } from '@angular/router';
import { ROUTE_LIST } from './shared/utils/route-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: ROUTE_LIST.HOME,
        pathMatch: 'full'
      },
      {
        path: ROUTE_LIST.HOME,
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
      },
      {
        path: ROUTE_LIST.SHOP,
        loadComponent: () => import('./pages/shop/shop.component').then(c => c.ShopComponent),
      },
      {
        path: ROUTE_LIST.ABOUT_US,
        loadComponent: () => import('./pages/about-us/about-us.component').then(c => c.AboutUsComponent),
      },
];
