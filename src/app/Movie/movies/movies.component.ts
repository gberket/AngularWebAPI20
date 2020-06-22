import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../Services/movieService/movies.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup} from "@angular/forms";
import { IMovies } from '../../Movies';
import { ActivatedRoute } from '@angular/router';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-movies',
  templateUrl:'./movies.component.html'
  ,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movie: IMovies;
  detailForm: FormGroup;
  public Movies = [];
  headElements = ['ID', 'Title', 'Genre', 'Director', 'Year Created', 'User Actions'];

  deleteModal: boolean = false; 
  readonly: boolean; 
  formlabel: string = '';  
  formbutton: string = '';
  formButtonStyle: string = '';

  constructor(private formBuilder: FormBuilder, private _movieService : MoviesService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._movieService.getData().subscribe(data => this.Movies = data);    
    this.detailForm = this.formBuilder.group({
      id:[''],
      title: [''],
      genre:[''],
      director:[''],
      yearCreated:['']
    });  
  }

  addNewMovie(){
    this.router.navigateByUrl('addmovie');
  }

  onSelect(movie){
    this.router.navigate(['/moviedtls',movie.id]);
  }

  onDelete(movie){
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", movie.id.toString());
    this.deleteModal = true;
    this.readonly = true;
    this.formlabel= 'Delete Movie';  
    this.formbutton = 'Delete';
    this.formButtonStyle = 'btn btn-danger';
        this._movieService.getMovieById(movie.id)
        .subscribe(data => {
      this.detailForm.setValue(data);
    });
  }

  onUpdate(movie){
    this.deleteModal = false;
    this.readonly = false;
    this.formlabel= 'Update Movie';  
    this.formbutton = 'Update';
    this.formButtonStyle = 'btn btn-success';
    this._movieService.getMovieById(movie.id)
        .subscribe(data => {
      this.detailForm.setValue(data);
    });
  }

  onConfirm(){
    let movieId = window.localStorage.getItem("editUserId");
    if(this.deleteModal){
      this.deleteModal = false;

      this._movieService.deleteMovie(movieId)
      .subscribe(
        () => {
          this._movieService.getData().subscribe(data => this.Movies = data); 
          this.router.navigate(['movies']);
        });
    }
    else{
      this._movieService.updateMovie(this.detailForm.value)
      .pipe(first())
      .subscribe(
        data => {      
          this._movieService.getData().subscribe(data => this.Movies = data); 
            this.router.navigate(['movies']);
        },
        error => {
          alert(error);
        });
    }
  }
}
