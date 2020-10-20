import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../core/get-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
userInput;
searchInput;

  constructor(private getApiService: GetAPIService) { }

  genresArray: any[] = [];

  ngOnInit(): void {
    this.getApiService.getGenres().subscribe((result: any) => {
      console.log("result", result);
      this.genresArray = result.genres;
    })

  }
getTitle() {
  this.getApiService.getTitle(this.userInput).subscribe((result: any) => {
    this.searchInput=result.results
    console.log("result", result);
   })
}
}
