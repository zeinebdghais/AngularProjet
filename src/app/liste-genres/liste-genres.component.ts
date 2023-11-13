import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styleUrls: [],
})
export class ListeGenresComponent implements OnInit {
  genres!: Genre[];
  ajout: boolean = true;

  updatedGr: Genre = {
    idGenre: 0,
    nomGenre: '',
    description: '',
  };
  constructor(private filmService: FilmService) {}
  ngOnInit(): void {
    this.filmService.listeGenres().subscribe((grs) => {
      this.genres = grs._embedded.genres;
      console.log(grs);
    });
  }

  chargerGenres(): void {
    this.filmService.listeGenres().subscribe((grs) => {
      this.genres = grs._embedded.genres;
      console.log(grs);
    });
  }

  genreUpdated(gr: Genre) {
    console.log('Genre updated event', gr);
    this.filmService.ajouterGenre(gr).subscribe(() => this.chargerGenres());
  }

  updateGr(gr: Genre) {
    this.updatedGr = gr;
    this.ajout = false;
  }
}
