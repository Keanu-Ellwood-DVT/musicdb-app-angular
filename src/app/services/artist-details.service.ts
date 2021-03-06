import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from '../models/artist';
import { Tracks } from '../models/track';
import { Albums } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class ArtistDetailsService {
  constructor(private http: HttpClient) {}

  getArtistDetails(query: string): Observable<Artist> {
    return this.http.get<Artist>(`${environment.apiUri}/artist/${query}`);
  }

  getArtistTopTracks(query: string): Observable<Tracks> {
    return this.http.get<Tracks>(
      `${environment.apiUri}/artist/${query}/top?limit=5`
    );
  }

  getArtistAlbums(query: string): Observable<Albums> {
    return this.http.get<Albums>(
      `${environment.apiUri}/artist/${query}/albums`
      );
  }
}
