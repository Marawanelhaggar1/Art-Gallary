import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductsComponent } from './one-products/one-products.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductArtistComponent } from './product-artist/product-artist.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product/:id', component: OneProductsComponent },
  { path: 'category/:id', component: ProductCategoryComponent },
  { path: 'artist/:id', component: ProductArtistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
