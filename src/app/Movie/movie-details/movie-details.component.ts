import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movieService/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup} from "@angular/forms";
import { IMovies } from '../../Movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovies;
  detailForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private _movieService : MoviesService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.detailForm = this.formBuilder.group({
      id:id,
      title: [''],
      genre:[''],
      director:[''],
      yearCreated:['']
    });

    this._movieService.getMovieById(id)
        .subscribe(data => {
      this.detailForm.setValue(data);
    });
  }

  goBack(){
    this.router.navigateByUrl('movies');
  }
}
