import { Component, OnInit, Input } from "@angular/core";
import { Track } from "src/app/models/track";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.css"]
})
export class TrackListComponent implements OnInit {
  @Input()
  track: Track;

  trackLength: string;

  constructor() {}

  ngOnInit(): void {
    this.convertTrackTime();
  }

  convertTrackTime() {
    var value = this.track.duration;
    this.trackLength =
      Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
  }
}
