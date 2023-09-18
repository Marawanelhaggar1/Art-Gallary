import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsModel } from 'src/app/core/models/products-model';
import { ProductServicesService } from 'src/app/core/services/product-services.service';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  stock = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  category_id = new FormControl('', [Validators.required]);
  artist_id = new FormControl('', [Validators.required]);
  products: ProductsModel[] = [];
  newProduct: FormGroup;
  page: number[] = [];
  constructor(
    private _productService: ProductServicesService,
    private _snack: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _dialog: MatDialog
  ) {
    this.newProduct = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      artist_id: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getProducts(1);
  }

  deleteProduct(id: number) {
    return this._productService.delete(id).subscribe((res) => {
      this._snack.open('deleted Successfully', 'X', { duration: 3000 });
      this.getProducts(1);
    });
  }

  openDialog(id: number) {
    this._dialog.open(UpdateProductComponent, {
      width: '400px',
      height: '500px',
      data: {
        id: id,
      },
    });
  }

  getProducts(p: number) {
    return this._productService.getAllProducts(p).subscribe((res) => {
      this.products = res.data;
      for (let i = 1; i <= res.meta.last_page; i++) {
        if (!this.page.includes(i)) this.page.push(i);
      }
      console.log(res.meta.last_page);
      return this.products;
    });
  }
  getError() {}

  addProduct() {
    let finalProduct = {
      ...this.newProduct.value,
      discount: 1.6,
      status: 'available',
    };
    console.log(finalProduct);
    this._productService.createProduct(finalProduct).subscribe({
      next: (res) => {
        console.log(res);
        this._snack.open('Product created successfully', 'X', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.log(err);
        this._snack.open(err.error.message, 'X', { duration: 3000 });
      },
    });
  }

  onSubmit() {
    if (this.newProduct.valid) {
      this.addProduct();
    } else {
      this._snack.open('Not Valid Data', 'X', { duration: 3000 });
    }
  }
}
