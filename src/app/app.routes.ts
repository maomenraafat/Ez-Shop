import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { NotfoundComponent } from './core/layout/notfound/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'productDetails/:id',
    loadComponent: () =>
      import('./features/pages/product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
  },
  { path: '**', component: NotfoundComponent },
];
