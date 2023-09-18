import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModel } from '../models/products-model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  constructor(private _http: HttpClient, private _Cookie: CookieService) {}

  getAllProducts(
    page: number
  ): Observable<{ data: ProductsModel[]; meta: { last_page: number } }> {
    return this._http.get<{
      data: ProductsModel[];
      meta: { last_page: number };
    }>(`http://localhost:8000/api/products?page=${page}`);
  }

  getProductById(id: number): Observable<{ data: ProductsModel }> {
    return this._http.get<{ data: ProductsModel }>(
      `http://localhost:8000/api/products/${id}`
    );
  }

  getProductByCategoryId(id: number): Observable<{ data: ProductsModel[] }> {
    return this._http.get<{ data: ProductsModel[] }>(
      `http://localhost:8000/api/products/category/${id}`
    );
  }

  getProductByArtistId(id: number): Observable<{ data: ProductsModel[] }> {
    return this._http.get<{ data: ProductsModel[] }>(
      `http://localhost:8000/api/products/artist/${id}`
    );
  }

  searchProduct(name: any): Observable<ProductsModel[]> {
    const req = { search: name };

    return this._http.post<ProductsModel[]>(
      `http://localhost:8000/api/products/search/product`,
      req
    );
  }

  createProduct(body: any): Observable<ProductsModel> {
    return this._http.post<ProductsModel>(
      'http://localhost:8000/api/products',
      body,
      {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
        },
      }
    );
  }

  delete(id: number) {
    return this._http.delete(`http://localhost:8000/api/products/${id}`, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
      },
    });
  }

  update(body: any) {
    return this._http.put(`http://localhost:8000/api/products`, body, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
      },
    });
  }
}
