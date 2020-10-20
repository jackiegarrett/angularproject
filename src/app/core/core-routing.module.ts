import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { WatchlistPageComponent } from '../watchlist-page/watchlist-page.component';


const routes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'watch-list',
    component: WatchlistPageComponent
  },
  // {
  //   path: 'movie-info/:id',
  //   // component: ''
  // },
  {
    path: '',
    redirectTo: '/movie-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: MovieListComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
