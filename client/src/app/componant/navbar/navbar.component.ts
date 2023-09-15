import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoriesModel } from '../../core/models/categories-model';
import { CategoryServicesService } from '../../core/services/category-services.service';

import { User } from 'src/app/core/models/user';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/core/services/auth/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  categories: CategoriesModel[] = [];
  selectedValue?: string;

  user?: User | null;

  constructor(
    private categoryService: CategoryServicesService,
    private _cookie: CookieService,
    private _userService: UserService
  ) {
    console.log(this.user);
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

  getCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = [...res.data];
      return this.categories;
    });
  }

  getUser() {
    return this._userService.get().subscribe((res) => {
      console.log(res);
    });
  }

  logOut() {
    this.user = null;
    this._cookie.delete('user');
  }
}
