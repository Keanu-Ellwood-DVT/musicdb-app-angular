import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artists } from '../models/artists'


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists(query?: string): Observable<Artists>{
    return this.http.get<Artists>(`${environment.apiUri}/search/artist${query ? `?name=${query}` : ''}`);

    //https://api.deezer.com/search/artist?q=deer
  }
}
