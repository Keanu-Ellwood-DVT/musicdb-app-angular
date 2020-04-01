import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  @Input()
  track: Track;

  trackLength: number;

  constructor() {}

  ngOnInit(): void {
    this.trackLength = this.track.duration * 1000;
  }
}
