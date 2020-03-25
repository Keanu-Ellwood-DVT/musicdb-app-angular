import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Artist } from "../models/artist";
import { Tracks } from "../models/tracks";
import { Albums } from '../models/albums';

@Injectable({
  providedIn: "root"
})
export class ArtistDetailsService {
  constructor(private http: HttpClient) {}

  getArtistDetails(query: string): Observable<Artist> {
    return this.http.get<Artist>(`${environment.apiUri}/artist/${query}`); //https://api.deezer.com/artist/27
  }

  getArtistTopTracks(query: string): Observable<Tracks> {
    return this.http.get<Tracks>(
      `${environment.apiUri}/artist/${query}/top?limit=5`
    ); //https://api.deezer.com/artist/12656245/top?limit=50
  }

  getArtistAlbums(query: string): Observable<Albums> {
    return this.http.get<Albums>(
      `${environment.apiUri}/artist/${query}/albums`
    ); //https://api.deezer.com/artist/27/albums
  }
}
