import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Artists } from '../../models/artists';
import { ArtistsService } from '../../services/artists.service';
import { QueryService } from 'src/app/services/query.service';
import { SearchStateService } from 'src/app/services/search-state.service';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  @Input() query: string;

  artists: Artists;

  constructor(
    private artistsService: ArtistsService,
    private queryService: QueryService,
    private searchStateService: SearchStateService ) {
    this.artists = new Artists();
  }

  ngOnInit(): void {
    this.searchStateService.setMessage(true);
    this.artistsService.getTopArtists().subscribe(x => {
      this.artists.data = x;
    });

    this.queryService.queryString$.subscribe(query => {
      if (query === '') {
        this.artistsService.getTopArtists().subscribe(x => {
          this.artists.data = x;
        });
      } else {
        this.artistsService.getArtists(query).subscribe(x => {
           (this.artists = x);
        });
      }
    });
  }
}
