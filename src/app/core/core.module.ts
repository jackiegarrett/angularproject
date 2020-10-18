import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { WatchlistPageComponent } from '../watchlist-page/watchlist-page.component';


@NgModule({
  declarations: [
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ],
  exports: [
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent
  ]
})
export class CoreModule {

 }
