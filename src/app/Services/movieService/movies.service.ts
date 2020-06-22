import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovies } from '../../Movies';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:44362/api/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  constructor(private http : HttpClient) { }

  getData(): Observable<IMovies[]>{
    return this.http.get<IMovies[]>(baseUrl);
  }

  getMovieById(id): Observable<IMovies>{
    return this.http.get<IMovies>(`${baseUrl}/${id}`);
  }

  createMovie(movie: IMovies): Observable<IMovies> {
    return this.http.post<IMovies>(baseUrl, movie);
  }

  deleteMovie(id): Observable<IMovies>{
    return this.http.delete<IMovies>(`${baseUrl}/${id}`);
  }

  updateMovie(movie: IMovies): Observable<IMovies>{
    return this.http.put<IMovies>(`${baseUrl}/${movie.id}`, movie);
  }
  
}
