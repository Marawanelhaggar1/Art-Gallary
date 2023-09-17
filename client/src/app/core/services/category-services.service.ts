import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../models/categories-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CategoryServicesService {
  constructor(private _http: HttpClient, private _Cookie: CookieService) {}

  getAllCategories(): Observable<{ data: CategoriesModel[] }> {
    return this._http.get<{ data: CategoriesModel[] }>(
      'http://localhost:8000/api/categories'
    );
  }

  getCategoryById(id: number): Observable<{ data: CategoriesModel }> {
    return this._http.get<{ data: CategoriesModel }>(
      `http://localhost:8000/api/categories/${id}`
    );
  }

  createCategory(body: any): Observable<CategoriesModel> {
    return this._http.post<CategoriesModel>(
      'http://localhost:8000/api/categories',
      body,
      {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
        },
      }
    );
  }
}
