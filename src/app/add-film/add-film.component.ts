import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: [],
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();
  genres!: Genre[];
  newIdGenre!: number;
  newGenre!: Genre;
  constructor(private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
    this.filmService.listeGenres().subscribe((gs) => {
      this.genres = gs._embedded.genres;
      console.log(gs);
    });
  }

  addFilm() {
    //console.log(this.newFilm);
    //this.newGenre = this.filmService.consulterGenre(this.newIdGenre);
    this.newFilm.genre = this.genres.find(
      (genre) => genre.idGenre == this.newIdGenre
    )!;
    this.filmService.ajouterFilm(this.newFilm).subscribe((film) => {
      //console.log(film);
      this.router.navigate(['films']);
    });
  }
}
