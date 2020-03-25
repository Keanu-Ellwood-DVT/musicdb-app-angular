import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { Artists } from "../../models/artists";
import { Artist } from "../../models/artist";
import { ArtistsService } from "../../services/artists.service";
import { of } from "rxjs";
import { debounceTime, tap, map, switchAll } from "rxjs/operators";
import { MenuComponent } from "src/app/menu/menu.component";
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
    private queryService: QueryService
  ) {}

  ngOnInit(): void {
    // this.artistsService.getInitialArtists().subscribe(x => {
    //   this.artists = x;
    // });

    this.artistsService
          .getTopArtists()
          .subscribe(x => {
            //this.artists = new Artists();
            this.artists.data = x;
            this.artists.next = "";
          });

    this.queryService.queryString$.subscribe(query => {
      if (query === "") {
        this.artistsService
        .getInitialArtists()
        .subscribe(x => {
          debounceTime(500),
          this.artists = x;
        });

        // this.artistsService
        //   .getTopArtists()
        //   .subscribe(x => {
        //     this.artists.data = x;
        //     this.artists.next = "";
        //   });

      }
      else {
        this.artistsService
          .getArtists(query)
          .subscribe(x => {
            debounceTime(500),
            this.artists = x
          });
      }
    });
  }
}
