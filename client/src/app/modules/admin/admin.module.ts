import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { ProductsComponent } from './products/products.component';
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';
import { CategoriesComponent } from './categories/categories.component';
import { ArtistsComponent } from './artists/artists.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryServicesService } from 'src/app/core/services/category-services.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    CategoriesComponent,
    ArtistsComponent,
    OrdersComponent,
    OrderDetailsComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMatModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdminGuard, CategoryServicesService],
})
export class AdminModule {}
