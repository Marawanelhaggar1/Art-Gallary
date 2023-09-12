import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModel } from '../models/products-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<{ data: ProductsModel[] }> {
    return this._http.get<{ data: ProductsModel[] }>(
      'http://localhost:8000/api/products'
    );
  }
}
