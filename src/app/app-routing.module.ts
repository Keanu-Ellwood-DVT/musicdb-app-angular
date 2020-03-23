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
    path: '**',
    pathMatch: 'full',
    component: ResourceNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ]
})
export class AppRoutingModule { }
