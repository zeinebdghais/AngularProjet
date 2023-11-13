import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    RechercheParGenreComponent,
    RechercheParTitreComponent,
    SearchFilterPipe,
    ListeGenresComponent,
    UpdateGenreComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
