import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetails } from 'src/app/core/models/orders';
import { ProductsModel } from 'src/app/core/models/products-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any[] = [];
  finalCart: OrderDetails[] = [];
  displayedColumns: string[] = ['id', 'image', 'name', 'price', 'count'];

  constructor(private _dialog: MatDialog) {}

  ngOnInit() {
    this.getProducts();
    this.cart.forEach((prod) => {
      prod.count = 1;
    });
  }

  getProducts() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  sendToCheckOut() {
    this.cart.forEach((prod) => {
      this.finalCart.push({
        product_quantity: prod.count,
        product_id: prod.id,
      });
    });
    if (!localStorage.getItem('checkout')) {
      localStorage.setItem('checkout', JSON.stringify(this.finalCart));
    }
    this._dialog.closeAll();
  }
}
