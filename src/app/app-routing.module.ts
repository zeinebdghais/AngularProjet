import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FilmGuard } from './film.guard';

const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
  { path: 'addfilm', component: AddFilmComponent, canActivate: [FilmGuard] },
  { path: 'updatefilm/:id', component: UpdateFilmComponent },
  { path: 'rechercheParGenre', component: RechercheParGenreComponent },
  { path: 'rechercheParTitre', component: RechercheParTitreComponent },
  {
    path: 'listeGenres',
    component: ListeGenresComponent,
    canActivate: [FilmGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
