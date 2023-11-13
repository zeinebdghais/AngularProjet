import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { GenreWrapper } from '../model/genreWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  apiURLGenre: string = 'http://localhost:8080/films/genre';
  films!: Film[];
  //genres!: Genre[];

  constructor(private http: HttpClient) {
    //console.log('création de film service');
  }

  listeFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(apiURL);
  }

  ajouterFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(apiURL, film, httpOptions);
  }

  supprimerFilm(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterFilm(id: number): Observable<Film> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Film>(url);
  }

  updateFilm(f: Film): Observable<Film> {
    return this.http.put<Film>(apiURL, f, httpOptions);
  }

  listeGenres(): Observable<GenreWrapper> {
    return this.http.get<GenreWrapper>(this.apiURLGenre);
  }

  rechercherParGenre(idGenre: number): Observable<Film[]> {
    const url = `${apiURL}/filmsgenre/${idGenre}`;
    return this.http.get<Film[]>(url);
  }

  rechercherParTitre(titre: string): Observable<Film[]> {
    const url = `${apiURL}/filmsByTitre/${titre}`;
    return this.http.get<Film[]>(url);
  }

  ajouterGenre(gr: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiURLGenre, gr, httpOptions);
  }
}
