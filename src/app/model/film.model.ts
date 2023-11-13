import { Genre } from './genre.model';

export class Film {
  idFilm!: number;
  titreFilm!: string;
  realisateur!: string;
  dateSortie!: Date;
  genre!: Genre;
}
