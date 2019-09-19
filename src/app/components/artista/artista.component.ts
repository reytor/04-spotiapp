import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artist: any;
  loading: boolean;
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute,
               private spotifyService: SpotifyService) {
      this.loading = true;
      this.artist = false;
      this.activatedRoute.params.subscribe( params => {
        console.log( 'params : ', params);
        this.spotifyService.getArtist(params['id'])
             .subscribe(data => {
               console.log('from getartista: ', data);
               this.artist = data;
               this.loading = false;
             });
      });
   }

  ngOnInit() {
  }

}
