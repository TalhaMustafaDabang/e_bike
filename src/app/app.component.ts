import { of } from 'rxjs/observable/of';
import { tap, map, catchError } from 'rxjs/operators';

import { HttpClient, } from '@angular/common/http';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

}
