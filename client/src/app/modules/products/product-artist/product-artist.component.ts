import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsModel } from 'src/app/core/models/products-model';
import { ProductServicesService } from 'src/app/core/services/product-services.service';

@Component({
  selector: 'app-product-artist',
  templateUrl: './product-artist.component.html',
  styleUrls: ['./product-artist.component.scss'],
})
export class ProductArtistComponent {
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
      this.getProductByArtistId(this.id);
    });
  }

  getProductByArtistId(id: number) {
    this._productService.getProductByArtistId(id).subscribe((res) => {
      this.products = res.data;
      return this.products;
    });
  }
}
