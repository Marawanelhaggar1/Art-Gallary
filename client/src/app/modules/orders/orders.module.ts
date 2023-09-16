import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';

@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [CommonModule, OrdersRoutingModule, AngularMatModule],
})
export class OrdersModule {}