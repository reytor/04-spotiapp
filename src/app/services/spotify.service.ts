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
      Authorization : 'Bearer BQAUf3cywdF_0M6KmXrIKW78yeCj52n95vAauX5tx_7voQS7lDJT0rOTwLIoF0Cqq7vKde8r5zTVb-ktNYk'
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
