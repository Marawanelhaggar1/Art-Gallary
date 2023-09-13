import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsModel } from 'src/app/core/models/products-model';
import { ArtistsServicesService } from 'src/app/core/services/artists-services.service';
import { CategoryServicesService } from 'src/app/core/services/category-services.service';
import { ProductServicesService } from 'src/app/core/services/product-services.service';

@Component({
  selector: 'app-one-products',
  templateUrl: './one-products.component.html',
  styleUrls: ['./one-products.component.scss'],
})
export class OneProductsComponent {
  id!: number;
  product!: ProductsModel;
  sub: any;
  categoryName: string = '';
  artistName: string = '';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductServicesService,
    private _artistService: ArtistsServicesService,
    private _categoryService: CategoryServicesService
  ) {}

  ngOnInit() {
    this.sub = this._ActivatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getProduct(this.id);
    });
  }

  getProduct(id: number) {
    return this._productService.getProductById(id).subscribe((res) => {
      this.product = res.data;
      // console.log(this.product);
      this.getCategoryName(this.product.category_id);
      this.getArtistName(this.product.artist_id);
      return this.product;
    });
  }

  getCategoryName(id: number) {
    return this._categoryService.getCategoryById(id).subscribe((res) => {
      this.categoryName = res.data.name;
      return this.categoryName;
    });
  }

  getArtistName(id: number) {
    return this._artistService.getArtistById(id).subscribe((res) => {
      this.artistName = res.data.name;
      return this.artistName;
    });
  }
}
