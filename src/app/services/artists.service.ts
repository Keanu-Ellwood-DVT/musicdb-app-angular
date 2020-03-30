import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artists } from '../models/artists';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getInitialArtists(): Observable<Artists> {
    return this.http.get<Artists>(`${environment.apiUri}/search/artist?q=deer`);
  }

getTopArtists(): Observable<Artist[]> {
    const artists$: Observable<Artist>[] = [];

    for (let i = 1; i < 22; i++) {
        artists$.push(
          this.http.get<Artist>(
            `${environment.apiUri}/artist/${i}`
          )
        );
    }
    return forkJoin(artists$);
}

  getArtists(query?: string): Observable<Artists> {
    return this.http.get<Artists>(
      `${environment.apiUri}/search/artist${query ? `?q=${query}` : ''}`
    );
  }
}
