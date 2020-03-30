import {
  Component,
  OnInit,
  Input
} from "@angular/core";
import { Artists } from "../../models/artists";
import { ArtistsService } from "../../services/artists.service";
import { QueryService } from "src/app/services/query.service";

@Component({
  selector: "app-artist-list",
  templateUrl: "./artist-list.component.html",
  styleUrls: ["./artist-list.component.css"]
})
export class ArtistListComponent implements OnInit {
  @Input() query: string;

  artists: Artists;

  constructor(
    private artistsService: ArtistsService,
    private queryService: QueryService ) {
    this.artists = new Artists();
  }

  ngOnInit(): void {

    this.artistsService.getTopArtists().subscribe(x => {
      this.artists.data = x;
    });

    this.queryService.queryString$.subscribe(query => {
      if (query === "") {
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
