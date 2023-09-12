import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductsComponent } from './one-products/one-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product', component: OneProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
