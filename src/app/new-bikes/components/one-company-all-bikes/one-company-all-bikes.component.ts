import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-company-all-bikes',
  templateUrl: './one-company-all-bikes.component.html',
  styleUrls: ['./one-company-all-bikes.component.css']
})
export class OneCompanyAllBikesComponent implements OnInit {
  private posts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('https://www.ebike.pk/wp-json/wp/v2/pages').subscribe(data => {
    //   console.log('data', data);
    // })
  }

}
