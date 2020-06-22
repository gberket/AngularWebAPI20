import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './Movie/add-movie/add-movie.component';
import { MoviesComponent } from './Movie/movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './Movie/movie-details/movie-details.component';


const routes: Routes = [
  //if user doesnt write the full path is redirected in home page
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'addmovie', component: AddMovieComponent},
  //id parameter is passed from movie id when user clicks on table
  {path: 'moviedtls/:id', component: MovieDetailsComponent},
  //if user writes a path that doesnt exist is redirected to PAge Not found component
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,MoviesComponent,AddMovieComponent,PageNotFoundComponent,MovieDetailsComponent]