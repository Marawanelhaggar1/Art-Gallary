import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/core/models/products-model';
import { ProductServicesService } from 'src/app/core/services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: ProductsModel[] = [];
  constructor(private _productsService: ProductServicesService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this._productsService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      console.log(this.products);
      return this.products;
    });
  }
}
