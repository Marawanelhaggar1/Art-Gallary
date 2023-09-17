import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArtistsModel } from 'src/app/core/models/artists-model';
import { ArtistsServicesService } from 'src/app/core/services/artists-services.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent {
  newArtist: FormGroup;
  name = new FormControl('', [Validators.required]);
  artists: ArtistsModel[] = [];

  constructor(
    private _snack: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _artistService: ArtistsServicesService
  ) {
    this.newArtist = _formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getArtists();
  }

  onSubmit() {
    if (this.newArtist.valid) {
      this.addCategory();
    } else {
      this._snack.open('Not Valid Data', 'X', { duration: 3000 });
    }
  }

  addCategory() {
    return this._artistService
      .createArtist(this.newArtist.value)
      .subscribe((res) => {
        console.log(res);
        this.getArtists();
      });
  }

  getArtists() {
    this._artistService.getAllArtists().subscribe((artists) => {
      this.artists = artists.data;
    });
  }
  getError() {}
  updateArtist(id: number) {}
  deleteArtist(id: number) {
    return this._artistService.delete(id).subscribe((res) => {
      console.log(res);
      this.getArtists();
    });
  }
}
