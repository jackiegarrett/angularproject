import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../core/get-api.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private getApiService: GetAPIService) { }

  genresArray: any[] = [];
  newArrayGenres:any[] = [];

  ngOnInit(): void {
    this.getApiService.getGenres().subscribe((result: any) => {
      console.log("result", result);
      this.genresArray = result;
      for (let i = 0; i < this.genresArray.length; i++) {
        this.newArrayGenres.push(this.genresArray);
      }
    })
  }

}
