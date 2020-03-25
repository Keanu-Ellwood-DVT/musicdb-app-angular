import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Artist } from "../../models/artist";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ArtistDetailsService } from "src/app/services/artist-details.service";
import { Tracks } from "src/app/models/tracks";
import { Albums } from 'src/app/models/albums';
@Component({
  selector: "app-artist-details",
  templateUrl: "./artist-details.component.html",
  styleUrls: ["./artist-details.component.css"]
})
export class ArtistDetailsComponent implements OnInit, OnChanges {

  @Input() query: string;

  artist: Artist;
  tracks: Tracks;
  albums: Albums;

  trackLength: number;

  constructor(
    private route: ActivatedRoute,
    private artistDetailsService: ArtistDetailsService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");

    this.artistDetailsService.getArtistDetails(id).subscribe(x => {
      this.artist = x;
    });

    this.artistDetailsService.getArtistTopTracks(id).subscribe(x => {
      this.tracks = x;
    });

    this.artistDetailsService.getArtistAlbums(id).subscribe(x => {
      this.albums = x;
    });

    this.trackLength = this.tracks.data.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
