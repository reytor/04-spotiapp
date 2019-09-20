import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artist: any;
  loading: boolean;
  topTracks: any;

  constructor( private router: Router, private activatedRoute: ActivatedRoute,
               private spotifyService: SpotifyService) {
      this.loading = true;
      this.artist = false;
      this.activatedRoute.params.subscribe( params => {

        this.getArtist(params.id);
        this.getTopTracks(params.id);

      });
    }

    getArtist(id) {
      this.spotifyService.getArtist(id)
      .subscribe(data => {
        this.artist = data;
        this.loading = false;
      });
    }

    getTopTracks(id) {
      this.spotifyService.getTopTracks(id)
      .subscribe(data => {
        console.log(data);
        this.topTracks = data;
      });
    }
  }
