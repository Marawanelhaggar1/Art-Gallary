import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ProductServicesService } from 'src/app/core/services/product-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  stock = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  category_id = new FormControl('', [Validators.required]);
  artist_id = new FormControl('', [Validators.required]);
  newProduct: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _dialog: MatDialog,
    private _productService: ProductServicesService,
    private _snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
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

  onSubmit() {
    if (this.newProduct.value) {
      this.updateProduct();
      this._dialog.closeAll();
      window.location.reload();
    } else {
      this._snack.open('invalid Data', 'X', { duration: 3000 });
    }
  }

  getError() {}

  updateProduct() {
    return this._productService
      .update({
        id: this.data.id,
        discount: 1.6,
        status: 'available',
        ...this.newProduct.value,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          this._snack.open('product updated successfully', 'X', {
            duration: 3000,
          });
        },
        error: (err) => {
          console.log(err);
          this._snack.open(err.error.message, 'X', { duration: 3000 });
        },
      });
  }
}
