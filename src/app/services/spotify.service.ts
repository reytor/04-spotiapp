import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  constructor( private httpClient: HttpClient) {
    console.log('Spotify service ready...');
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQDMxplb4qrL6VdPbVQA4ob-gx3aLcZWRkqwU03JMe2ItyZ3XlE683OFrh8QSJOfdRZCGZPW0xlTXpFuEh8'
    });
    return this.httpClient.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ));
  }

  Search(term) {
    return this.getQuery(`search?q=${term}&type=artist&limit=20`)
            .pipe( map( data => data['artists'].items));
  }
}
