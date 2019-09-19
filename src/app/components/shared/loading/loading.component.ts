import { Component, OnInit } from '@angular/core';
import { faCoffee, faRedoAlt, faSync  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: []
})
export class LoadingComponent implements OnInit {

  faCoffee = faCoffee;
  faRedoAlt = faRedoAlt;
  faSync = faSync ;

  constructor() { }

  ngOnInit() {
  }

}
