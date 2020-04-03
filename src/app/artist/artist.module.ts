import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { TrackListComponent } from './artist-details/track-list/track-list.component';
import { AlbumCardComponent } from './artist-details/album-card/album-card.component';
import { StaticModule } from '../static/static.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    ArtistCardComponent,
    ArtistListComponent,
    ArtistDetailsComponent,
    TrackListComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    StaticModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule
  ],
  exports: [ArtistRoutingModule]
})
export class ArtistModule {}
