import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';
import { IsLoggedIn } from 'src/app/core/guards/is-logged-in.guard';

@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AngularMatModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [IsLoggedIn],
})
export class OrdersModule {}
