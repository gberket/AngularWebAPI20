import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './Movie/movies/movies.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesService } from './Services/movieService/movies.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './Movie/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    routingComponents,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    MovieDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
