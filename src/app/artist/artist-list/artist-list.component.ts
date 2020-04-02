import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { QueryService } from 'src/app/services/query.service';
import { Artists } from 'src/app/models/artist';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  @Input() query: string;

  artists: Artists;
  pageLoading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private artistsService: ArtistsService,
    private queryService: QueryService ) {
    this.artists = new Artists();
  }

  ngOnInit(): void {

    this.artistsService.getTopArtists().subscribe(x => {
      this.artists.data = x;
      this.pageLoading$.next(false);
    });

    this.queryService.queryString$.subscribe(query => {
      this.pageLoading$.next(true);
      if (query === '') {
        this.artistsService.getTopArtists().subscribe(x => {
          this.artists.data = x;
          this.pageLoading$.next(false);
        });
      } else {
        this.artistsService.getArtists(query).subscribe(x => {
           (this.artists = x);
           this.pageLoading$.next(false);
        });
      }
    });
  }
}
