import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductsModel } from 'src/app/core/models/products-model';
import { User } from 'src/app/core/models/user';
import { ArtistsServicesService } from 'src/app/core/services/artists-services.service';
import { CategoryServicesService } from 'src/app/core/services/category-services.service';
import { ProductServicesService } from 'src/app/core/services/product-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  cart: ProductsModel[] = [];
  user?: User | null;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductServicesService,
    private _artistService: ArtistsServicesService,
    private _categoryService: CategoryServicesService,
    private _cookie: CookieService,
    private _snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.sub = this._ActivatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getProduct(this.id);
    });
    if (this._cookie.get('user')) {
      this.user = JSON.parse(this._cookie.get('user'));
    } else {
      this.user = null;
    }
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
  addToCart(product: ProductsModel) {
    if (this.user) {
      if (localStorage.getItem('cart')) {
        this.cart = JSON.parse(localStorage.getItem('cart')!);
        let exist = this.cart.find((prod) => prod.id == product.id);
        console.log(exist);
        if (exist) {
          console.log('already there');
        } else {
          this.cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } else {
        this.cart = [];
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    } else {
      this._snack.open('you must be logged in', 'X', { duration: 4000 });
    }
  }
}
