import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { FInal_Orders, OrderDetails } from 'src/app/core/models/orders';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  customer_name = new FormControl('', [Validators.required]);
  customer_email = new FormControl('', [Validators.required, Validators.email]);
  customer_phone = new FormControl('', [Validators.required]);
  customer_address = new FormControl('', [Validators.required]);
  fullOrder!: FInal_Orders;
  orderDetails: OrderDetails[] = [];
  order: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _cookie: CookieService,
    private _snack: MatSnackBar,
    private _orderService: OrdersService
  ) {
    this.order = this._formBuilder.group({
      customer_name: ['', [Validators.required]],
      customer_email: ['', [Validators.required, Validators.email]],
      customer_phone: ['', [Validators.required]],
      customer_address: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.order.valid) {
      this.checkout();
    } else {
      this._snack.open('Wrong Data', 'X', { duration: 4000 });
    }
  }

  getError() {
    'Wrong Data';
  }

  checkout() {
    this.orderDetails = JSON.parse(localStorage.getItem('checkout')!);
    console.log(this.order.value);
    console.log(this.orderDetails);
    let or = {
      order: { ...this.order.value, status: 'pending', date: Date.now },
      order_details: [...this.orderDetails],
    };

    return this._orderService.createOrder(or).subscribe({
      next: (res) => {
        console.log(res);
        this._snack.open('Products Ordered Successfully', 'X', {
          duration: 4000,
        });
        this.sendToHome();
      },
      error: (err) => {
        console.log(err);
        this._snack.open(err.error.message, 'X', { duration: 4000 });
      },
    });
  }

  sendToHome() {
    window.location.href = '/';
  }
}
