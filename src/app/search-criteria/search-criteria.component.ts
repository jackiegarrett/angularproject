import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../core/get-api.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private getApiService: GetAPIService) { }

  genres: any[] = [];
  newArray:any[] = [];

  ngOnInit(): void {
    this.getApiService.getMovies().subscribe((result: any) => {
      console.log("result", result);
      this.genres = result;
      for (let i = 0; i < 20; i++) {
        this.newArray.push(this.genres);
      }
    })

  }

}
