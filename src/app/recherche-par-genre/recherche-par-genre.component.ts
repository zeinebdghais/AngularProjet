import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';
import { FilmService } from '../services/film.service';
@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrls: [],
})
export class RechercheParGenreComponent implements OnInit {
  films!: Film[];
  IdGenre!: number;
  genres!: Genre[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.listeGenres().subscribe((gs) => {
      this.genres = gs._embedded.genres;
      console.log(gs);
    });
  }

  onChange() {
    this.filmService.rechercherParGenre(this.IdGenre).subscribe((fs) => {
      this.films = fs;
    });
  }
}
