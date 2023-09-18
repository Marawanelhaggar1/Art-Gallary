import {
  Component,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CategoriesModel } from '../../core/models/categories-model';
import { CategoryServicesService } from '../../core/services/category-services.service';

import { User } from 'src/app/core/models/user';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/core/services/auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/modules/orders/cart/cart.component';
import { ProductsModel } from 'src/app/core/models/products-model';
import { ProductServicesService } from 'src/app/core/services/product-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  categories: CategoriesModel[] = [];
  selectedValue?: string;
  cartCount?: number;
  user?: User | null;
  searchInput: string = '';
  role: string = '';
  searchResult: ProductsModel[] = [];

  constructor(
    private categoryService: CategoryServicesService,
    private productService: ProductServicesService,
    private _cookie: CookieService,
    private _userService: UserService,
    public dialog: MatDialog,
    private _productService: ProductServicesService,
    private _eref: ElementRef,
    private _renderer: Renderer2
  ) {
    this.getCartCount();
  }

  ngOnInit(): void {
    this.getCategories();
    this.getUser();
    if (this._cookie.get('user')) {
      this.user = JSON.parse(this._cookie.get('user'));
    } else {
      this.user = null;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent);
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = [...res.data];
      return this.categories;
    });
  }

  getUser() {
    return this._userService.get().subscribe((res) => {
      this.role = res.role;
    });
  }

  admin(): boolean {
    if (this.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.user = null;
    this._cookie.delete('user');
    // localStorage.removeItem('cart');
    this.cartCount = 0;
    localStorage.clear();
    this.sendToHome();
  }
  getCartCount() {
    if (localStorage.getItem('cart')) {
      this.cartCount = JSON.parse(localStorage.getItem('cart')!).length;
    } else {
      this.cartCount = 0;
    }
    return this.cartCount;
  }

  sendToHome() {
    window.location.href = '/';
  }

  @ViewChild('searchBox') searchBox!: ElementRef;

  closeSearchBox() {
    const searchBoxIsVisible =
      this.searchBox.nativeElement.classList.contains('show');
    if (searchBoxIsVisible) {
      this._renderer.removeClass(this.searchBox.nativeElement, 'show');
    }
  }

  search() {
    this._productService.searchProduct(this.searchInput).subscribe({
      next: (results) => {
        this.searchResult = results;
        if (this.searchResult) {
          this._renderer.addClass(this.searchBox.nativeElement, 'show');
        }
        console.log(this.searchResult);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        this.searchInput = '';
      },
    });
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.closeSearchBox();
    }
  }
}
