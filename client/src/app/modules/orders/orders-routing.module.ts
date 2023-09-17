import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { IsLoggedIn } from 'src/app/core/guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', component: CheckoutComponent, canActivate: [IsLoggedIn] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
