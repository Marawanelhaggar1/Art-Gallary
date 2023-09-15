import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { OneProductsComponent } from './one-products/one-products.component';
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductArtistComponent } from './product-artist/product-artist.component';

@NgModule({
  declarations: [
    ProductsComponent,
    OneProductsComponent,
    ProductCategoryComponent,
    ProductArtistComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, AngularMatModule],
})
export class ProductsModule {}
