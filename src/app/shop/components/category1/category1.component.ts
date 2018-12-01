import { Component, OnInit } from '@angular/core';
declare let $;
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.next3').click(function () { $('.carousel3c').carousel('next'); return false; });
    $('.prev3').click(function () { $('.carousel3c').carousel('prev'); return false; });
    $('.carousel3c').carousel({
      interval: 3000
    });
  }

}
