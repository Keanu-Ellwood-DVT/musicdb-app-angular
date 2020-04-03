import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/models/track';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  @Input()
  track: Track;

  trackLength: number;
  playState$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnInit(): void {
    this.trackLength = this.track.duration;
  }

  playTrack() {
    this.playState$.next(true);
  }

  pauseTrack() {
    this.playState$.next(false);
  }
}
