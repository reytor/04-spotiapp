import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient: HttpClient) {
    console.log('Spotify service ready...');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQD664-26GV8Y27ZNVhRU4WG-eT_7CvCvhJ-LfWzDsXN8tsugD7nT47wlixiRP9jfGTew1A5z9hY9QmkIAY'
    });
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
