import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artists'
  },
  {
    path: 'artists',
    loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ResourceNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload'})
  ]
})
export class AppRoutingModule { }
