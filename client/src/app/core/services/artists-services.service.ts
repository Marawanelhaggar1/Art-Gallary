import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistsModel } from '../models/artists-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ArtistsServicesService {
  constructor(private _http: HttpClient) {}

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
}
