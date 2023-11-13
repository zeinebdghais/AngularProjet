import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styleUrls: [],
})
export class RechercheParTitreComponent implements OnInit {
  titreFilm!: string;
  films!: Film[];
  allFilms!: Film[];
  searshTerm!: string;
  searchTerm!: string;
  constructor(private filmService: FilmService) {}
  ngOnInit(): void {
    this.filmService.listeFilms().subscribe((fs) => {
      console.log(fs);
      this.films = fs;
    });
  }

  rechercherFilm() {
    this.filmService.rechercherParTitre(this.titreFilm).subscribe((films) => {
      this.films = films;
      console.log(films);
    });
  }

  onKeyUp(filterText: string) {
    this.films = this.allFilms.filter((item) =>
      item.titreFilm.toLowerCase().includes(filterText)
    );
  }
}
