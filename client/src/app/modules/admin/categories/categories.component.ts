import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesModel } from 'src/app/core/models/categories-model';
import { CategoryServicesService } from 'src/app/core/services/category-services.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories!: CategoriesModel[];
  newCategory: FormGroup;
  name = new FormControl('', [Validators.required]);

  constructor(
    private _categoryService: CategoryServicesService,
    private _snack: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {
    this.newCategory = _formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories.data;
    });
  }

  deleteCategory(id: number): any {
    this._categoryService.delete(id).subscribe((res) => {
      console.log(res);
      this.getCategories();
    });
  }
  getError() {}
  updateCategory(id: number) {}

  onSubmit() {
    if (this.newCategory.valid) {
      this.addCategory();
    } else {
      this._snack.open('Not Valid Data', 'X', { duration: 3000 });
    }
  }

  addCategory() {
    this._categoryService
      .createCategory(this.newCategory.value)
      .subscribe((data) => {
        console.log(data);
        this.getCategories();
      });
  }
}
