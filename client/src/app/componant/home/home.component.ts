import { Component, OnInit } from '@angular/core';
import { ArtistsModel } from '../../core/models/artists-model';
import { ArtistsServicesService } from '../../core/services/artists-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  artists: ArtistsModel[] = [];

  constructor(private artistService: ArtistsServicesService) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getAllArtists().subscribe((res) => {
      this.artists = [...res.data];
      return this.artists;
    });
  }
}
