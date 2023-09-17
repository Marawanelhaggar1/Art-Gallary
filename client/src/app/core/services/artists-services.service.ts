import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistsModel } from '../models/artists-model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class ArtistsServicesService {
  constructor(private _http: HttpClient, private _Cookie: CookieService) {}

  getAllArtists(): Observable<{ data: ArtistsModel[] }> {
    return this._http.get<{ data: ArtistsModel[] }>(
      'http://localhost:8000/api/artists'
    );
  }
  getArtistById(id: number): Observable<{ data: ArtistsModel }> {
    return this._http.get<{ data: ArtistsModel }>(
      `http://localhost:8000/api/artists/${id}`
    );
  }

  createArtist(body: any): Observable<ArtistsModel> {
    return this._http.post<ArtistsModel>(
      'http://localhost:8000/api/artists',
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
    return this._http.delete(`http://localhost:8000/api/artists/${id}`, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
      },
    });
  }
}
