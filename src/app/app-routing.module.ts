import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'movie-list',
    loadChildren: () => import('./core/core-routing.module').then(m => m.CoreRoutingModule)
  },
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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



    // {
  //   path: 'movie-info/:id',
  //   // component: ''
  // },