import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../models/categories-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryServicesService {
  constructor(private _http: HttpClient) {}

  getAllCategories(): Observable<{ data: CategoriesModel[] }> {
    return this._http.get<{ data: CategoriesModel[] }>(
      'http://localhost:8000/api/categories'
    );
  }
}
