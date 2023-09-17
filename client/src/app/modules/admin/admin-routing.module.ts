import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArtistsComponent } from './artists/artists.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent, canActivate: [AdminGuard] },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'artists',
    component: ArtistsComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
