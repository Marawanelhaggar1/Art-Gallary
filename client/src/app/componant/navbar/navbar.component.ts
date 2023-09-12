import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from '../../core/models/categories-model';
import { CategoryServicesService } from '../../core/services/category-services.service';
import { ArtistsModel } from '../../core/models/artists-model';
import { ArtistsServicesService } from '../../core/services/artists-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  categories: CategoriesModel[] = [];
  artists: ArtistsModel[] = [];
  selectedValue?: string;

  constructor(
    private categoryService: CategoryServicesService,
    private artistService: ArtistsServicesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getArtists();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = [...res.data];
      return this.categories;
    });
  }

  getArtists() {
    this.artistService.getAllArtists().subscribe((res) => {
      this.artists = [...res.data];
      return this.artists;
    });
  }
}
