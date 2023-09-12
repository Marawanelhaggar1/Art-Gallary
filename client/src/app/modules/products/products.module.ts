import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { OneProductsComponent } from './one-products/one-products.component';

@NgModule({
  declarations: [ProductsComponent, OneProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
