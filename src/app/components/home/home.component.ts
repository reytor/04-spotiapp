import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

   newSongs: any;
   loading: boolean;
   errorMsg: any;

   constructor( private spotifyService: SpotifyService) {
      this.loading = true;
      this.errorMsg = false;

      this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.newSongs =  data;
        this.loading = false;
      },
      (errorService) => {
          this.loading = false;
          this.errorMsg = errorService.error.error.message;
      });
  }

  ngOnInit() {

  }

}
