import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component'
import { ArtistListComponent } from './artist-list/artist-list.component'
import { ResourceNotFoundComponent } from '../resource-not-found/resource-not-found.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ArtistListComponent
      },
      {
        path: ':id',
        component: ArtistDetailsComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: '**',
    component: ResourceNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
