import { Component } from '@angular/core';
import { ProductsModel } from 'src/app/core/models/products-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: ProductsModel[] = [];
  finalCart: { product_id: number; product_quantity: number }[] = [];
  count?: number;
  displayedColumns: string[] = ['id', 'image', 'name', 'price', 'count'];

  constructor() {}

  ngOnInit() {
    this.getProducts();
    // console.log(this.count);
    this.cart.forEach((prod) => {
      this.finalCart.push({ product_id: prod.id, product_quantity: 1 });
    });
    console.log(this.finalCart);
  }

  getProducts() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }
  }
}
