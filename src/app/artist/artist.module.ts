import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistRoutingModule } from "./artist-routing.module";
import { ArtistCardComponent } from "./artist-card/artist-card.component";
import { ArtistListComponent } from "./artist-list/artist-list.component";
import { ArtistDetailsComponent } from "./artist-details/artist-details.component";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import {MatListModule} from '@angular/material/list';
import { TrackListComponent } from './artist-details/track-list/track-list.component';
import { AlbumCardComponent } from './artist-details/album-card/album-card.component';

@NgModule({
  declarations: [
    ArtistCardComponent,
    ArtistListComponent,
    ArtistDetailsComponent,
    TrackListComponent,
    AlbumCardComponent
  ],
  imports: [CommonModule, ArtistRoutingModule, MatCardModule, MatDividerModule,MatListModule],
  exports: [ArtistRoutingModule]
})
export class ArtistModule {}
