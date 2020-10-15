import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../core/get-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private getApiService: GetAPIService) { }

  movieInfo: any[] = [];
  newArray:any[] = [];

  ngOnInit(): void {
    this.getApiService.getMovies().subscribe((result: any) => {
      console.log("result", result);
      this.movieInfo = result;
      for (let i = 0; i < 20; i++) {
        this.newArray.push(this.movieInfo);
      }
    })
  }

}
