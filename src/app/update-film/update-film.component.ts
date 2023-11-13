import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: [],
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  genres!: Genre[];
  updatedGenreId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    //this.genres = this.filmService.listeGenres();
    this.filmService.listeGenres().subscribe((gs) => {
      this.genres = gs._embedded.genres;
      console.log(gs);
    });

    this.filmService
      .consulterFilm(this.activatedRoute.snapshot.params['id'])
      .subscribe((film) => {
        this.currentFilm = film;
        this.updatedGenreId = this.currentFilm.genre.idGenre;
      });

    console.log(this.currentFilm);
  }

  updateFilm() {
    //console.log(this.currentFilm );
    /*this.currentFilm.genre = this.filmService.consulterGenre(
      this.updatedGenreId
    );*/
    this.currentFilm.genre = this.genres.find(
      (genre) => genre.idGenre == this.updatedGenreId
    )!;

    this.filmService.updateFilm(this.currentFilm).subscribe((f) => {
      this.router.navigate(['films']);
    });
  }
}
