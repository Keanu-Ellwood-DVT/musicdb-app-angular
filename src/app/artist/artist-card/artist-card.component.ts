import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../models/artist';
@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  constructor() {}

  @Input()
  artist: Artist;

  ngOnInit(): void {}
}
