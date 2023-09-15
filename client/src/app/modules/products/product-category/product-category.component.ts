import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsModel } from 'src/app/core/models/products-model';
import { ProductServicesService } from 'src/app/core/services/product-services.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent {
  products: ProductsModel[] = [];
  sub: any;
  id!: number;

  constructor(
    private _productService: ProductServicesService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this._activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getProductByCategoryId(this.id);
    });
  }

  getProductByCategoryId(id: number) {
    this._productService.getProductByCategoryId(id).subscribe((res) => {
      this.products = res.data;
      return this.products;
    });
  }
}
