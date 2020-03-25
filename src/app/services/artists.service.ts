import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { environment } from "src/environments/environment";
import { Artists } from "../models/artists";
import { Artist } from "../models/artist";
import { mergeAll, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getInitialArtists(): Observable<Artists> {
    //Dummy query
    return this.http.get<Artists>(`${environment.apiUri}/search/artist?q=deer`);
  }

getTopArtists(): Observable<Artist[]> {
    let artists$: Observable<Artist>[] = [];

    for (let i = 1; i < 22; i++) {
      if (i === 12) {

      }else{
        artists$.push(
          this.http.get<Artist>(
            `${environment.apiUri}/artist/${i}`
          )
        );
      }

    }
    forkJoin(artists$).subscribe(x => console.log(x))
    return forkJoin(artists$);
}

// getOneArtist(): Observable<Artist[]> {

//   return this.http.get<Artist[]>( `${environment.apiUri}/artist/1`);
// }


  getArtists(query?: string): Observable<Artists> {
    return this.http.get<Artists>(
      `${environment.apiUri}/search/artist${query ? `?q=${query}` : ""}`
    ); //https://api.deezer.com/search/artist?q=deer?limit=50
  }
}
