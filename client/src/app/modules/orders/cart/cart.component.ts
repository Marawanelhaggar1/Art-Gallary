import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/core/models/products-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any[] = [];
  finalCart: { product_id: number; product_quantity: number }[] = [];
  count?: number;
  displayedColumns: string[] = ['id', 'image', 'name', 'price', 'count'];

  constructor() {}

  ngOnInit() {
    this.getProducts();
    // console.log(this.count);
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
    console.log(this.cart);
  }
}
