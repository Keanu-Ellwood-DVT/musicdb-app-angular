import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { ArtistCardComponent } from './artist/artist-card/artist-card.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArtistDetailsComponent,
    ArtistListComponent,
    ArtistCardComponent,
    ResourceNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
