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
  page: number[] = [];
  constructor(private _productsService: ProductServicesService) {}

  ngOnInit(): void {
    this.getAllProducts(1);
  }

  getAllProducts(p: number) {
    return this._productsService.getAllProducts(p).subscribe((res) => {
      this.products = res.data;
      for (let i = 1; i <= res.meta.last_page; i++) {
        if (!this.page.includes(i)) this.page.push(i);
      }
      console.log(res.meta.last_page);
      return this.products;
    });
  }
}
