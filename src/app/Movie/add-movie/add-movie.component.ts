import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../Services/movieService/movies.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _movieService : MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      title: [''],
      genre:[''],
      director:[''],
      yearCreated:['']
    });  
  }

  addNewMovie(){
    this._movieService.createMovie(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['movies']);
    });
  }

  
  cancel(){
    this.router.navigateByUrl('movies');
  }
}
