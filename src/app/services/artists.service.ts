import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin, range } from "rxjs";
import { environment } from "src/environments/environment";
import { Artists } from "../models/artists";
import { Artist } from "../models/artist";
import { mergeMap, filter, toArray, map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getInitialArtists(): Observable<Artists> {
    return this.http.get<Artists>(`${environment.apiUri}/search/artist?q=deer`);
  }

  getTopArtists(): Observable<Artist[]> {
    return range(1, 21).pipe(
      filter(i => i !== 12), //filter 12 as deezer does not have an artists with id == 12
      mergeMap(i => this.http.get<Artist>(`${environment.apiUri}/artist/${i}`)),
      toArray()
    )
  }

  getArtists(query?: string): Observable<Artists> {
    return this.http.get<Artists>(
      `${environment.apiUri}/search/artist${query ? `?q=${query}` : ""}`
    );
  }
}
